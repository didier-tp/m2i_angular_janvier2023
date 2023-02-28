//var express = require('express');
import express from 'express';
const apiRouter = express.Router();

var allDevises = [];

allDevises.push({ code : 'EUR' , nom : 'Euro' , change : 1.0 });
allDevises.push({ code : 'USD' , nom : 'Dollar' , change : 1.1 });
allDevises.push({ code : 'JPY' , nom : 'Yen' , change : 123 });
allDevises.push({ code : 'GBP' , nom : 'Livre' , change : 0.9 }); 

function findDeviseInArrayByCode(devises,code){
	var devise=null;
	for(let i in devises){
		if(devises[i].code == code){
			  devise=devises[i]; break;
		}
	}
	return devise;
}

function removeDeviseInArrayByCode(devises,code){
	var delIndex;
	for(let i in devises){
		if(devises[i].code == code){
			  delIndex=i; break;
		}
	}
	if(delIndex){
		devises.splice(delIndex,1);
	}
}

function findDevisesWithChangeMini(devises,changeMini){
	var selDevises=[];
	for(let i in devises){
		if(devises[i].change >= changeMini){
			  selDevises.push(devises[i]);
		}
	}
	return selDevises;
}

//exemple URL: http://localhost:8282/devise-api/public/devise/EUR
apiRouter.route('/devise-api/public/devise/:code')
.get( function(req , res  , next ) {
	var codeDevise = req.params.code;
	var devise = findDeviseInArrayByCode(allDevises,codeDevise);
	if(devise==null)
	  res.status(404).json({message:"devise inconnue pour code="+codeDevise});
	else
	  res.send(devise);
});

//exemple URL: http://localhost:8282/devise-api/public/devise (returning all devises)
//             http://localhost:8282/devise-api/public/devise?changeMini=1.05
apiRouter.route('/devise-api/public/devise')
.get( function(req , res  , next ) {
	var changeMini = req.query.changeMini;
	if(changeMini){
		res.send(findDevisesWithChangeMini(allDevises,changeMini));
	}else{
	   res.send(allDevises);
	}
});


// http://localhost:8282/devise-api/private/role-admin/devise en mode post
// avec { "code" : "mxy" , "nom" : "monnaieXy" , "change" : 123 } dans req.body
apiRouter.route('/devise-api/private/role-admin/devise')
.post( function(req , res  , next ) {
	var nouvelleDevise = req.body;
	console.log("POST,nouvelleDevise="+JSON.stringify(nouvelleDevise));
	allDevises.push(nouvelleDevise);
	res.send(nouvelleDevise);
});

//exemple URL: http://localhost:8282/devise-api/public/convert?amount=50&source=EUR&target=USD
apiRouter.route('/devise-api/public/convert')
.get( function(req , res  , next ) {
	let montant = Number(req.query.amount);
	let codeDeviseSource = req.query.source;
	let codeDeviseCible = req.query.target;
	let deviseSource = findDeviseInArrayByCode(allDevises,codeDeviseSource);
	let deviseCible = findDeviseInArrayByCode(allDevises,codeDeviseCible);
    let montantConverti = montant * deviseCible.change /  deviseSource.change;
	res.send ( { amount : montant , 
		source :codeDeviseSource , 
		target : codeDeviseCible ,
		result : montantConverti});
});


// http://localhost:8282/devise-api/private/role-admin/devise en mode PUT
// avec { "code" : "USD" , "nom" : "Dollar" , "change" : 1.123 } dans req.body
apiRouter.route('/devise-api/private/role-admin/devise')
.put( function(req , res  , next ) {
	var newValueOfDeviseToUpdate = req.body;
	console.log("PUT,newValueOfDeviseToUpdate="+JSON.stringify(newValueOfDeviseToUpdate));
	var deviseToUpdate = findDeviseInArrayByCode(allDevises,newValueOfDeviseToUpdate.code);
	if(deviseToUpdate!=null){
		deviseToUpdate.nom = newValueOfDeviseToUpdate.nom;
		deviseToUpdate.change = newValueOfDeviseToUpdate.change;
		res.send(deviseToUpdate);
	}else{
		res.status(404).json({ error : "no devise to update with code=" + newValueOfDeviseToUpdate.code });
	}
	
});

// http://localhost:8282/devise-api/private/role-admin/devise/EUR en mode DELETE
apiRouter.route('/devise-api/private/role-admin/devise/:code')
.delete( function(req , res  , next ) {
	var codeDevise = req.params.code;
	console.log("DELETE,codeDevise="+codeDevise);
	var deviseToDelete = findDeviseInArrayByCode(allDevises,codeDevise);
	if(deviseToDelete){
		removeDeviseInArrayByCode(allDevises,codeDevise);
		res.send({ deletedDeviseCode : codeDevise } );
	}
	else{
		res.status(404).json({ error : "no devise to delete with code=" + codeDevise });
	}
});


//export { apiRouter };//pour import * as deviseApiRoutes from './devise-api-routes-memory.js';
export default { apiRouter };//pour import as deviseApiRoutes from './devise-api-routes-memory.js';