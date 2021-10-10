export default function Activitys({ activitys }) {
  return (
    <div>
      {activitys &&
        activitys.map((e) => (
          <div key={e.createdAt}>
            <p key={e.name}>{e.name}</p>
            <p key={e.dificultad}>{e.dificultad}</p>
            <p key={e.duracion}>{e.duracion}</p>
            <p key={e.temporada}>{e.temporada}</p>
          </div>
        ))}
    </div>
  );
}
