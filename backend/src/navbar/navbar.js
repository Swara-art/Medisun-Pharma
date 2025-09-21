import express from 'express';

const router = express.Router();

router.get('/about', (req, res) => {
    res.send('About Us Page');
});

router.get('/contact', (req, res) => {
    res.send('Contact Us Page');
});

router.get("/products", async (req, res) => {
  try {
    const meds = await Medicine.find();
    res.json(meds);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/events', (req, res) => {
    res.send('Our Events Page');
});


export default router;