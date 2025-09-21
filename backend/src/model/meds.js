import mongoose from "mongoose";

const MedSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String },
  uses: [String],
  sideEffects: [String],
  dosage: String,
  contraindications: [String],
  prescriptionRequired: Boolean
});


export default mongoose.model("Medicine", MedSchema);
