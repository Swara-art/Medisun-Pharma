import express from 'express';

const router = express.Router();

router.get('/about', (req, res) => {
    res.send('About Us Page');
});

router.get('/contact', (req, res) => {
    res.send('Contact Us Page');
});

router.get('/products', (req, res) => {
    res.send('Our Product Page');
});

router.get('/events', (req, res) => {
    res.send('Our Events Page');
});


export default router;