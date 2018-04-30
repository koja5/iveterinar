var express=require('express');
var nodemailer = require("nodemailer");
var router = express.Router();
var sha1 = require('sha1');

var smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'aleksandarjovana95@gmail.com',
        pass: 'Badi#1504'
    },
    tls: {rejectUnauthorized: false},
    debug:true
});

//slanje maila pri registraciji
router.post('/send',function(req,res) {
    let broj = sha1(req.body.email);
    console.log(broj + 'mailApii');
	let mail = "Postovani,\nRegistrovali ste se na stranici iVeterinar.com, a Vase korisnicko ime je "+req.body.username;
	mail+=".\nVas nalog mozete aktivirati klikom na sledeci link:\n";
    //mail+="http://147.91.204.116:2030/api/korisnik/verifikacija/" + broj + "\n";
    mail+="http://localhost:3000/api/korisnik/verifikacija/" + broj + "\n";
	mail+="Pozdrav,\niVeterinar Tim!"

	var mailOptions={
		to : req.body.email,
		subject : "Potvrdite registraciju",
		text : mail
	}

	smtpTransport.sendMail(mailOptions, function(error, response){
   	 	if(error){
        	console.log(error);
			res.end("error");
	 	}
		else {
        	console.log("Message sent: " + response.message);
			res.end("sent");
		}
	});
});

//slanje mail-a kada korisnik zaboravi lozinku

router.post('/forgotmail',function(req,res) {
	let broj = sha1(req.body.email);
	let mail = "Postovani,\nAko ste podneli zahtev za promenu lozinke na stranici iVeterinar.com, ";
	mail+="to mozete uciniti klikom na sledeci link.\n Ukoliko niste podneli takav zahtev, zanemarite ovu poruku.\n";
	mail+="http://147.91.204.116:2030/changePassword/" + broj + "\n";
	mail+="Pozdrav,\niVeterinar Team!"

	var mailOptions={
		to : req.body.email,
		subject : "No reply",
		text : mail
	}

	smtpTransport.sendMail(mailOptions, function(error, response){
   	 	if(error){
        	console.log(error);
			res.end("error");
	 	}
		else {
        	console.log("Message sent: " + response.message);
			res.end("sent");
		}
	});
});

router.post('/askQuestion',function(req,res) {

	let ime = req.body.ime;
	let naslov = req.body.naslov;
	let email = req.body.email;
	let poruka = req.body.poruka;
	let mail = "Posiljalac: \n"+ime+"\n"+email+"\n\n"+poruka;

	console.log(mail);
	var mailOptions={
		to : "aleksandarjovana95@gmail.com",
		subject : naslov,
		text : mail
	}

	smtpTransport.sendMail(mailOptions, function(error, response){
   	 	if(error){
        	console.log(error);
			res.send({message:"error"});
	 	}
		else {
        	console.log("Message sent: " + response.message);
			res.send({message:"sent"});
		}
	});
});



module.exports = router;
