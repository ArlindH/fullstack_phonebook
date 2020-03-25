import Person from '../../models/Person';

export async function getPeople(parameters) {
    // Extract pagination data
    const page = parameters.page ? parseInt(parameters.page) : 1;
    const pageSize = parameters.pageSize ? parseInt(parameters.pageSize) : 10;
    delete parameters.pageSize;
    delete parameters.page;

    const people = await Person.find(parameters).skip((page - 1) * pageSize).limit(pageSize);
    const total = await Person.find(parameters).countDocuments();

    return { list: people, pageSize, page, total };
}

export async function addPerson(person_data) {
    const person = Person(person_data)
    await person.save();

    return person;
}