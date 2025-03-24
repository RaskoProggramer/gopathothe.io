const form = document.getElementById("contact-form");
document.addEventListener("DOMContentLoaded", function(){
    emailjs.init("aQGo-Oe-LBT29FNy0");

    document.getElementById("contact-form").addEventListener("submit", function (event){
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let subject = document.getElementById("subject").value;
        let message = document.getElementById("message").value;

        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields.");
            return;
        }
        
         emailjs.send("service_7a1n93x", "template_syk5h2p", {
            name: name,
            email: email,
            subject: subject,
            message: message
        })
        .then(function(response) {
            console.log("✅ Email sent successfully!", response);

            // Show success message
            alert("✅ Message sent successfully!");

            // Reset the form correctly
            form.reset();  // FIX: Now "form" is defined above
        })
        .catch(function(error) {
            console.error("❌ Email error:", error);
            alert("❌ Failed to send message. Please try again.");
        });
    });
});