import { useState,useEffect } from "react";
import {
Typography,
} from '@material-tailwind/react';
import { Footer } from "@/widgets/layout";
import axios from "axios";


// const questions = [
//   {
//     question: 'pourquoi le Code Pénal?',
//     answer:
//       'Le Code Pénal est une loi qui établit les infractions pénales et les peines applicables en cas de violation de ces lois. Il a pour but de protéger la société en décourageant les comportements criminels et en punissant ceux qui les commettent. Le Code Pénal est donc un outil important pour maintenir l\'ordre et la sécurité dans une société donnée.'
//   },
//   {
//     question: 'Est-ce que le Code Pénal est supérieur à la Constitution ?',
//     answer:
//       'Non, la Constitution est la loi suprême d\'un pays et prévaut sur toutes les autres lois, y compris le Code Pénal.'
//   },
//   {
//     question: 'Est-ce que le Code Pénal peut violer les droits fondamentaux énoncés dans la Constitution ?',
//     answer:
//       'Non, le Code Pénal ne peut pas violer les droits fondamentaux énoncés dans la Constitution, car ces droits ont une valeur supérieure à toutes les autres lois.'
//   },
//   {
//     question: 'Est-ce que la Constitution peut affecter le contenu du Code Pénal ?',
//     answer:
//       'Oui, la Constitution peut affecter le contenu du Code Pénal en établissant des principes généraux qui doivent être respectés dans l\'élaboration des lois pénales.      '
//   },
//   {
//     question: 'Est-ce que le Code Pénal peut être modifié par une simple majorité au Parlement ?',
//     answer:
//       'Non, le Code Pénal est généralement considéré comme une loi fondamentale et son adoption et sa modification nécessitent souvent une majorité qualifiée ou une procédure spéciale'
//   }
// ];

const CodePenal = () => {

    const [data, setData] = useState([]);
    const [mode, setMode] = useState('Titres');
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/codepenal/titre');
      setData(response.data);
    };

    const handleModeChange = async (newMode) => {
        setMode(newMode);
        let url = '';
        switch (newMode) {
          case 'Titres':
            url = 'https://sheltered-headland-30754.herokuapp.com/codepenal/titre';
            break;
          case 'Articles':
            url = 'https://sheltered-headland-30754.herokuapp.com/codepenal/article';
            break;
          case 'Sections':
            url = 'https://sheltered-headland-30754.herokuapp.com/codepenal/section';
            break;
          default:
            break;
        }
        const response = await axios.post(url, { mode: newMode });
        setData(response.data);
      };
  
  return (
    <>
    <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />

        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mt-40  font-black"
              >
               Code Penal
              </Typography>
              
            </div>
          </div>
        </div>
      </section>

      <div>
      <div className="flex justify-center mb-4 mt-8">
        <button
          className={`mx-2 px-4 py-2 rounded-md ${
            mode === 'Titres' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleModeChange('Titres')}
        >
          Titres
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded-md ${
            mode === 'Articles' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleModeChange('Articles')}
        >
          Articles
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded-md ${
            mode === 'Sections' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleModeChange('Sections')}
        >
          Sections
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {data.map((item) => (
          <div key={item.id} className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-lg font-bold">{item.libelle}</h3>
            <p className="text-gray-500">{item.section}</p>
          </div>
        ))}
      </div>
    </div>

    {/* footer */}
    <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
};

export default CodePenal;
