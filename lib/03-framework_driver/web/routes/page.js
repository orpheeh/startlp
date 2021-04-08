const route = require("express").Router();

const SendEmail = require("../../../01-application/use_case/SendEmail");

route.get("/", (req, res, next) => {
   res.render("page/index.pug"); 
});

route.get("/ok", (req, res, next) => {
   res.render("page/index.pug", { message: "Votre message a été transmis à Gatax avec succès" }); 
});

route.get("/oups", (req, res, next) => {
   res.render("page/index.pug", { message: "Votre message n'a pas pu être transmis, veuillez rééssayer" }); 
});

route.post("/message", async (req, res, next) => {
   const message = req.body.message;
   const email = req.body.email;
   const telephone = req.body.telephone;
   const nom = req.body.nom;
   
   const contact = process.env.CONTACT_EMAIL || 'norpheehounkponou@gmail.com';
   
   try {
      SendEmail(contact, "Message d'internaute sur le site de Gatax gatax.link", 
      `
         <html>
            <body>
               <h1>Nouveau message venant du site gatax.link</h1>
               <p>Nom et prenom: ${nom}</p>
               <p>Adresse email: ${email}</p>
               <p>Numero de telephone: ${telephone}</p>
               
               <h1>Message</h1>
               <p>
               ${message}
               </p>
               
               <p>Cordialement,</p>
            </body>
         </html>
      `);
      res.redirect("/ok#contact");
   } catch(err){
      console.log(err);
      res.redirect("/oups#contact");
   }
});

module.exports = route;