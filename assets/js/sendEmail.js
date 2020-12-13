function sendMail(contactForm) {
    emailjs.send("gmail", "rosie", {
        "project_request": contactForm.projectsummary.value,
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.emailaddress.value
    })
    .then(
        function (response) {
            console.log("SUCCESS", response);
        },
        function (error) {
            console.log("FAILED", error);
        });
}  

