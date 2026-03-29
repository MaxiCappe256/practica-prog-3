export default function FamilyMember({ orderedPersons }) {
  return (
    <div className="grid grid-cols-3 gap-5 mt-5">
      {orderedPersons.map((person) => (
        <div
          className="p-6 bg-slate-700 text-center rounded-md text-white"
          key={person.name}
        >
          <h3 className="text-xl">{person.name}</h3>
          <p>{person.age}</p>
        </div>
      ))}
    </div>
  );
}
