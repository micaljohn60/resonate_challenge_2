import './App.css';
import Card from './shared/components/card';
import ContactLists from './shared/components/contact_lists';
import { useEffect, useState } from 'react';
import { fetchContacts } from './service/contact_service';
import Loading from './shared/components/loading';


function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const data = await fetchContacts();
        setContacts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getContacts();
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;

  return (
    <div className="xs:grid xs:grid-cols-1 lg:flex justify-center gap-4 bg-gradient-to-tr xs:h-screen from-gray-800 to-zinc-800 text-white">

      <ContactLists contacts={contacts} onSelectUser={(user) => setSelectedUser(user)} onSelectImage={(image) => setSelectedImage(image)} />

      <Card user={selectedUser} image={selectedImage} />

    </div>

  );
}

export default App;
