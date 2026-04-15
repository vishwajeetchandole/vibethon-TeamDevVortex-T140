import Navbar from "../components/Navbar";

export default function Dashboard() {

  const user = JSON.parse(localStorage.getItem("aiml-user"));

  return (
    <div>

      <Navbar />

      <div className="px-10 mt-10">

        <h1 className="text-3xl font-bold">Dashboard</h1>

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="card p-6">
            XP: {user?.xp}
          </div>

          <div className="card p-6">
            Activities: {user?.history?.length}
          </div>

        </div>

      </div>

    </div>
  );
}
