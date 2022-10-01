 const postCookie = (req, res) => {
    res.status(200).cookie("login", "I am a cookie").send("Cookie created");
 }


 module.exports = { postCookie , }