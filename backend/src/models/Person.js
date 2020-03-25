import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
  first_name: { type: 'String', required: true },
  last_name: { type: 'String', required: true },
  phone: {type: 'String', required: true},
  created_at:  { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Person', PersonSchema);
