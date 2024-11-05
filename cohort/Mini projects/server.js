const express = require('express');
const app = express();
const PORT = 3000;
//const cors = require('cors');
//app.use(cors());
// Route to calculate total amount based on compound interest
app.get('/calculate', (req, res) => {
    
    console.log("CAME");
    const principal = parseFloat(req.query.principal);
    const rate = parseFloat(req.query.rate);
    const time = parseFloat(req.query.time);

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        return res.status(400).json({ error: 'Invalid input. Please enter valid positive numbers for principal, rate, and time.' });
    }

    // Calculate compound interest
    const amount = principal * Math.pow((1 + rate / 100), time);
    res.json({ totalAmount: amount.toFixed(2) });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
