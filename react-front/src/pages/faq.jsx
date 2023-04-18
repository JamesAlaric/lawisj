import { Fragment, useState } from "react";
import {
  Accordion,Input,Typography,
  AccordionHeader,
  AccordionBody } from '@material-tailwind/react';
import { Footer } from "@/widgets/layout";

const questions = [
  {
    question: 'pourquoi le code penal?',
    answer:
      'Le Code Pénal est une loi qui établit les infractions pénales et les peines applicables en cas de violation de ces lois. Il a pour but de protéger la société en décourageant les comportements criminels et en punissant ceux qui les commettent. Le Code Pénal est donc un outil important pour maintenir l\'ordre et la sécurité dans une société donnée.'
  },
  {
    question: 'Est-ce que le Code Pénal est supérieur à la Constitution ?',
    answer:
      'Non, la Constitution est la loi suprême d\'un pays et prévaut sur toutes les autres lois, y compris le Code Pénal.'
  },
  {
    question: 'Est-ce que le Code Pénal peut violer les droits fondamentaux énoncés dans la Constitution ?',
    answer:
      'Non, le Code Pénal ne peut pas violer les droits fondamentaux énoncés dans la Constitution, car ces droits ont une valeur supérieure à toutes les autres lois.'
  },
  {
    question: 'Est-ce que la Constitution peut affecter le contenu du Code Pénal ?',
    answer:
      'Oui, la Constitution peut affecter le contenu du Code Pénal en établissant des principes généraux qui doivent être respectés dans l\'élaboration des lois pénales.      '
  },
  {
    question: 'Est-ce que le Code Pénal peut être modifié par une simple majorité au Parlement ?',
    answer:
      'Non, le Code Pénal est généralement considéré comme une loi fondamentale et son adoption et sa modification nécessitent souvent une majorité qualifiée ou une procédure spéciale'
  }
];

const FAQ = () => {

  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
    <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex items-center justify-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                FAQ
              </Typography>

            </div>
          </div>
        </div>
      </section>

    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Foire aux Questions</h1>
          {questions.map((q, index) => (
        <Accordion open={open === index}>
            <AccordionHeader onClick={() => handleOpen(index)}>
              <span>{q.question}</span>
            </AccordionHeader>
              <AccordionBody >
                <p>{q.answer}</p>
              </AccordionBody>
        </Accordion>
          ))}
      {/* <section>
       <div className="w-72">
        <Input label="question" />
      </div>
      </section> */}
      </div>
    </div>
    <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
};

export default FAQ;
