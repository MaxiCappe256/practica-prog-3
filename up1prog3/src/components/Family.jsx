import FamilyMember from "./FamilyMember";

export default function Family({ orderedPersons }) {
  return (
    <div className="mt-5 flex flex-col justify-center items-center">
      <h2 className="text-white underline mb-4 text-center font-bold text-2xl mt-5">
        PRACTICA ADD EJ 1:
      </h2>
      <FamilyMember orderedPersons={orderedPersons} />
    </div>
  );
}
