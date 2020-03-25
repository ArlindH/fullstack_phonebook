import * as PeopleService from '../services/database/PeopleService';

export async function getPeople(req, res) {
    try {
      const people = await PeopleService.getPeople(req.query);
      return res.json({success: true, people})  
    } catch (e) {
      console.log(e);
      return res.json({success: false, error: e})
    }
}

export async function addPerson(req, res) {
  try {
    const person = await PeopleService.addPerson(req.body);
    return res.json({success: true, person})  
  } catch (e) {
    return res.json({success: false, error: e})
  }
}