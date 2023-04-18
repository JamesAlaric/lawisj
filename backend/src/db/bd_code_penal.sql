drop database if exists bd_code_penal;
create database bd_code_penal;
show databases;
use bd_code_penal;

drop table if exists livre;
create table livre (
	id_livre varchar(255) primary key not null,
    libelle varchar(255)
) engine = InnoDB;

drop table if exists titre;
create table titre (
	id_titre varchar(255) primary key not null,
    libelle varchar(255),
    livre varchar(255),
    foreign key (livre) references livre(id_livre)
) engine = InnoDB;

drop table if exists chapitre;
create table chapitre (
	id_chapitre varchar(255) primary key not null,
    libelle varchar(255),
    titre varchar(255),
    foreign key (titre) references titre(id_titre)
) engine = InnoDB;

drop table if exists section;
create table section (
	id_section varchar(255) primary key,
    libelle varchar(255),
    chapitre varchar(255),
    foreign key (chapitre) references chapitre(id_chapitre)
) engine = InnoDB;

drop table if exists article;
create table article (
	id_article varchar(255) primary key not null,
    libelle varchar(255),
    section varchar(255),
    foreign key (section) references section(id_section)
) engine = InnoDB;

drop table if exists alinea;
create table alinea (
	id_alinea varchar(255) primary key not null,
    libelle varchar(10000),
    article varchar(255),
    foreign key (article) references article(id_article)
) engine = InnoDB;

drop table if exists question;
create table question (
	id_question varchar(255) primary key not null,
    contenu varchar(255)
);

drop table if exists reponse;
create table reponse (
	id_reponse varchar(255) primary key not null,
    contenu varchar(255)
);

alter table reponse
	add column question varchar(255),
    add foreign key(question) references question(id_question);

insert into livre
	values ('CP.1', 'Livre I'),
    ('CP.2', 'Livre II: DES CRIMES, DES DELITS ET DES CONTRAVENTIONS');
    
insert into titre
	values ('CP.1.1', "TITRE I : DE L'APPLICATION DE LA LOI PENALE", 'CP.1'),
    ('CP.1.2', "TITRE II : DES PEINES ET DES MESURES DE SURETE", 'CP.1'),
    ('CP.1.3', "TITRE III : DE LA RESPONSABILITE PENALE DES PERSONNES PHYSIQUES ET MORALES", 'CP.1'),
    ('CP.1.4', "TITRE IV : DES LOIS FEDEREES", 'CP.1'),
    ('CP.2.1', "TITRE I : DES CRIMES ET DES DELITS CONTRE LA CHOSE PUBLIQUE", 'CP.2'),
    ('CP.2.2', "TITRE II : DES CRIMES ET DES DELITS CONTRE L'INTERET GENERAL", 'CP.2'),
    ('CP.2.3', "TITRE III : DES CRIMES ET DES DELITS CONTRE DES PARTICULIERS:", 'CP.2'),
    ('CP.0.4', "TITRE IV : DES CONTRAVENTIONS :", NULL),
    ('CP.0.5', "TITRE V : DES DISPOSITIONS TRANSITOIRES ET FINALES", NULL);

insert into chapitre
	values ('CP.1.1.1', 'DISPOSITIONS PRELIMINAIRES', 'CP.1.1'),
    ('CP.1.1.2', "CHAP II : DE L'APPLICATION DE LA LOI PENALE DANS LE TEMPS", 'CP.1.1'),
    ('CP.1.1.3', "CHAP III : DE L'APPLICATION DE LA LOI PENALE DANS L'ESPACE", 'CP.1.1'),
    ('CP.1.1.4', "CHAP IV : DE LA LOI ET DES SENTENCES PENALES ETRANGERES", 'CP.1.1'),
    ('CP.1.2.1', "CHAP I : DISPOSITIONS PRELIMINAIRES", 'CP.1.2'),
    ('CP.1.2.2', "CHAP II : DES PEINES PRINCIPALES", 'CP.1.2'),
    ('CP.1.2.3', "CHAP III : DES PEINES ACCESSOIRES", 'CP.1.2'),
    ('CP.1.2.4', "CHAP IV : DES MESURES DE SURETE", 'CP.1.2'),
    ('CP.1.2.5', "CHAP V : DE L'ENGAGEMENT PREVENTIF", 'CP.1.2'),
    ('CP.1.2.6', "CHAP VI : DU NON-CUMUL DES PEINES", 'CP.1.2'),
    ('CP.1.2.7', "CHAP VII : DES CAUSES QUI METTENT  OBSTACLE A L'EXECUTION DES PEINES", 'CP.1.2'),
    ('CP.1.2.8', "CHAP VIII : DES CAUSES QUI EFFACENT LA CONDAMNATION", 'CP.1.2'),
    ('CP.1.3.1', "CHAP I : DISPOSITIONS GENERALES", 'CP.1.3'),
    ('CP.1.3.2', "CHAP II : DES CAUSES QUI SUPPRIMENT OU ATTENUENT LA RESPONSABILITE PENALE DES PERSONNES PHYSIQUES", 'CP.1.3'),
    ('CP.1.3.3', "CHAP III :DES CAUSES QUI AGGRAVENT LA RESPONSABILITE PENALE DES PERSONNES PHYSIQUES ET MORALES", 'CP.1.3'),
    ('CP.1.3.4', "CHAP IV : DES CIRCONSTANCES ATTENUANTES ET DU CHOIX DE LA PEINE", 'CP.1.3'),
    ('CP.1.3.5', "CHAP V : DE LA TENTATIVE ET DE LA CONSPIRATION", 'CP.1.3'),
    ('CP.1.3.6', "CHAP VI : DE LA COACTION ET DE LA COMPLICITE", 'CP.1.3'),
    ('CP.2.1.1', "CHAP I : DES ATTEINTES A LA SURETE DE L'ETAT", 'CP.2.1'),
    ('CP.2.1.2', "CHAP II : DES ATTEINETES A LA CONSTITUTION", 'CP.2.1'),
    ('CP.2.1.3', "CHAP III : DES INFRACTIONS COMMISES PAR LES FONCTIONNAIRES DANS L'EXERCICE DE LEUR FONCTION", 'CP.2.1'),
    ('CP.2.1.4', "CHAP IV : DES ATTEINTES A L'AUTORITE PUBLIQUE", 'CP.2.1'),
    ('CP.2.1.5', "CHAP V : DES ATTEINTES AUX GARANTIES DE L'ETAT", 'CP.2.1'),
    ('CP.2.2.1', "CHAP I : DES ATTEINTES A LA SECURITE PUBLIQUE", 'CP.2.2'),
    ('CP.2.2.2', "CHAP II : DES ATTEINTES A LA PAIX PUBLIQUE", 'CP.2.2'),
    ('CP.2.2.3', "CHAP III : DES ATTEINTES A L'ECONOMIE PUBLIQUE", 'CP.2.2'),
    ('CP.2.2.4', "CHAP IV : DES ATTEINTES A LA SANTE PUBLIQUE", 'CP.2.2'),
    ('CP.2.2.5', "CHAP V : DES ATTEINTES A LA MORALITE PUBLIQUE", 'CP.2.2'),
    ('CP.2.2.6', "CHAP VI : DES ATTEINTES AUX CULTES", 'CP.2.2'),
    ('CP.2.3.1', "CHAP I : DES ATTEINTES A L'INTEGRITE CORPORELLE", 'CP.2.3'),
    ('CP.2.3.2', "CHAP II : DES ATTEINTES A LA LIBERTE ET A LA PAIX DES PERSONNES", 'CP.2.3'),
    ('CP.2.3.3', "CHAP III : DES ATTEINTES A LA CONFIANCE DES PERSONNES", 'CP.2.3'),
    ('CP.2.3.4', "CHAP IV : DES ATTEINTES AUX BIENS", 'CP.2.3'),
    ('CP.2.3.5', "CHAP V : DES ATTEINTES CONTRE L'ENFANT ET LA FAMILLE", 'CP.2.3');
    
insert into section
	values ("CP.1.1.1.0111", "Livre 1, Titre 1, Chapitre 1, Section 0111", "CP.1.1.1"),
    ("CP.1.1.2.0112", "Livre 1, Titre 1, Chapitre 2, Section 0112", "CP.1.1.2"),
    ("CP.1.1.3.0113", "Livre 1, Titre 1, Chapitre 3, Section 0113", "CP.1.1.3"),
    ("CP.1.1.4.0114", "Livre 1, Titre 1, Chapitre 4, Section 0114", "CP.1.1.4"),
    ("CP.1.2.1.0121", "Livre 1, Titre 2, Chapitre 1, Section 0121", "CP.1.2.1"),
    
    ('CP.1.2.2.1', "SECTION I : DE LA PEINE DE MORT", 'CP.1.2.2'),
    ('CP.1.2.2.2', "SECTION II : DE L'EMPRISONNEMENT", 'CP.1.2.2'),
    ('CP.1.2.2.3', "SECTION III : DE L'AMENDE", 'CP.1.2.2'),
    ('CP.1.2.2.4', "SECTION IV : DE LA DISSOLUTION", 'CP.1.2.2'),
    ('CP.1.2.2.5', "SECTION V : DE LA FERMETURE D L'ETABLISSMENT", 'CP.1.2.2'),
    ('CP.1.2.2.6', "SECTION VI : DES PEINES ALTERNATIVES", 'CP.1.2.2'),
    ('CP.1.2.2.7', "SECTION VII : DES DISPOSITIONS COMMUNES AUX PEINES PRIVATIVES DE LIBERTE", 'CP.1.2.2'),
    ('CP.1.2.3.1', "SECTION I : DES DECHEANCES", 'CP.1.2.3'),
    ('CP.1.2.3.2', "SECTION II : DES AUTRES PEINES ACCESSOIRES", 'CP.1.2.3'),
    ('CP.1.2.4.1', "SECTION I : DE L'INTERDICTION DE LA PROFESSION", 'CP.1.2.4'),
    ('CP.1.2.4.2', "SECTION II : DE LA RELEGATION", 'CP.1.2.4'),
    ('CP.1.2.4.3', "SECTION III : DE LA SURVEILLANCE ET DE L'ASSISTANCE POST-PENALES", 'CP.1.2.4'),
    ('CP.1.2.4.4', "SECTION IV : DE L'INTERNEMENT DANS UNE MAISON DE SANTE", 'CP.1.2.4'),
    ('CP.1.2.4.5', "SECTION V : DE LA CONFISCATION", 'CP.1.2.4'),
    ('CP.1.2.7.1', "SECTION I : DU SURCIS SIMPLE", 'CP.1.2.7'),
    ('CP.1.2.7.2', "SECTION II : DU SURCIS AVEC PROBATION", 'CP.1.2.7'),
    ('CP.1.2.7.3', "SECTION III : DE LA LIBERATION CONDITIONNELLE", 'CP.1.2.7'),
    ('CP.1.2.7.4', "SECTION IV : DE LA SUSPENSION DES MESURES POST-PENALES", 'CP.1.2.7'),
    ('CP.1.2.7.5', "SECTION V : DE LA GRACE - DE LA PRESCRIPTION - DE LA MORT", 'CP.1.2.7'),
    ('CP.1.2.8.1', "SECTION I : DE LA REHABILITATION", 'CP.1.2.8'),
    ('CP.1.2.8.2', "SECTION II : DE L'AMNISTIE", 'CP.1.2.8'),
    ('CP.2.1.1.1', "SECTION I : DE LA SURETE EXTERIEURE DE L'ETAT", 'CP.2.1.1'),
    ('CP.2.1.1.2', "SECTION II : DE LA SURETE INTERIEURE DE L'ETAT", 'CP.2.1.1'),
    ('CP.2.1.1.3', "SECTION III : DES PEINES ACCESSOIRES", 'CP.2.1.1'),
    ('CP.2.1.2.1', "SECTION I : DES DELITS ELECTORAUX", 'CP.2.1.2'),
    ('CP.2.1.2.2', "SECTION II : DE LA COALITION", 'CP.2.1.2'),
    ('CP.2.1.2.3', "SECTION III : DES EMPIETEMENTS", 'CP.2.1.2'),
    ('CP.2.1.2.4', "SECTION IV : DE L'UTILISATION IRREGULIERE DE LA FORCE PUBLIQUE", 'CP.2.1.2'),
    ('CP.2.1.2.5', "SECTION V : DES PEINES ACCESSOIRES", 'CP.2.1.2'),
    ('CP.2.1.3.1', "SECTION I : DISPOSITIONS PRELIMINAIRES", 'CP.2.1.3'),
    ('CP.2.1.3.2', "SECTION II : DES AVANTAGES ILLEGITIMES", 'CP.2.1.3'),
    ('CP.2.1.3.3', "SECTION III : DES INFRACTIONS CONTRE L'INTERET PUBLIQUE", 'CP.2.1.3'),
    ('CP.2.1.3.4', "SECTION IV : DES INFRACTIONS CONTRE L'INTERET DES PARTICULIERS", 'CP.2.1.3'),
	('CP.2.1.3.5', "SECTION V : DES ABSTENTIONS COUPABLES", 'CP.2.1.3'),
    ('CP.2.1.4.1', "SECTION I : DES OUTRAGES ET VIOLENCES", 'CP.2.1.4'),
    ('CP.2.1.4.2', "SECTION II : DE LA REBELLION", 'CP.2.1.4'),
    ('CP.2.1.4.3', "SECTION III : DE L'INFLUENCE ET DE LA FRAUDE", 'CP.2.1.4'),
    ('CP.2.1.4.4', "SECTION IV : DES FRAUDES EN JUSTICE", 'CP.2.1.4'),
    ('CP.2.1.4.5', "SECTION V : DU REFUS D'AIDER LA JUSTICE", 'CP.2.1.4'),
    ('CP.2.1.4.6', "SECTION VI : DE L'INOBSERVATION DE CERTAINES DECISIONS JUDICIARES", 'CP.2.1.4'),
    ('CP.2.1.4.7', "SECTION VII : DE L'ENTRAVE A L'EXERCICE DES SERVICES PUBLICS", 'CP.2.1.4'),
    ('CP.2.1.5.1', "SECTION I : DES CONTREFACONS", 'CP.2.1.5'),
    ('CP.2.1.5.2', "SECTION II : DES USURPATIONS", 'CP.2.1.5'),
    ('CP.2.1.5.3', "SECTION III : DES GARANTIES DE L'ECONOMIE NATIONALE", 'CP.2.1.5'),
    ('CP.2.3.1.1', "SECTION I : DE L'HOMICIDE ET DES BLESSURES VOLONTAIRES", 'CP.2.3.1'),
    ('CP.2.3.1.2', "SECTION II : DES VIOLENCES ET VOIES DE FAIT VOLONTAIRES", 'CP.2.3.1'),
    ('CP.2.3.1.3', "SECTION III : DISPOSITIONS COMMUNES", 'CP.2.3.1'),
    ('CP.2.3.1.4', "SECTION IV : DE L'HOMICIDE ET DES BLESSURES INVOLONTAIRES", 'CP.2.3.1'),
    ('CP.2.3.2.1', "SECTION I : DES ATTEINTES A LA LIBERTE", 'CP.2.3.2'),
    ('CP.2.3.2.2', "SECTION II : DES OFFENSES SEXUELLES", 'CP.2.3.2'),
    ('CP.2.3.2.3', "SECTION III : DES ATTEINTES A LA TRANQUILITE DES PERSONNES", 'CP.2.3.2'),
    ('CP.2.3.4.1', "SECTION I : DES DESTRUCTIONS", 'CP.2.3.4'),
    ('CP.2.3.4.2', "SECTION II : DES INFRACTIONS CONTRE LA FORTUNE D'AUTRUI", 'CP.2.3.4'),
    ('CP.2.3.4.3', "SECTION III : DES FAILLITES", 'CP.2.3.4');


insert into article
	values ("CP.1.1.1.0111.1", "ARTICLE 1: CONTENU", "CP.1.1.1.0111"),
    ("CP.1.1.1.0111.1-1", "ARTICLE 1-1: Aucune exemption", "CP.1.1.1.0111"),
    ("CP.1.1.1.0111.2", "ARTICLE 2: Application générale et spéciale", "CP.1.1.1.0111"),
    ("CP.1.1.2.0112.3", "ARTICLE 3: Non rétroactivité", "CP.1.1.2.0112"),
    ("CP.1.1.2.0112.4", "ARTICLE 4: Loi moins rigoureuse", "CP.1.1.2.0112"),
    ("CP.1.1.2.0112.5", "ARTICLE 5: Nouvelle mesure de sûreté", "CP.1.1.2.0112"),
    ("CP.1.1.2.0112.6", "ARTICLE 6: Abolition de l'infraction, de la peine ou de la mesure de sûreté", "CP.1.1.2.0112"),
    ("CP.1.1.3.0113.7", "ARTICLE 7: Infraction commise sur le territoire", "CP.1.1.3.0113"),
    ("CP.1.1.3.0113.8", "ARTICLE 8: Infraction partiellement ou totalement commise à l'étranger", "CP.1.1.3.0113"),
    ("CP.1.1.3.0113.9", "ARTICLE 9: Complicité, conspiration, tentative", "CP.1.1.3.0113"),
    ("CP.1.1.3.0113.10", "ARTICLE 10: Infraction commise à l'étranger par le citoyen ou résident", "CP.1.1.3.0113"),
    ("CP.1.1.3.0113.11", "ARTICLE 11: Infractions internationales", "CP.1.1.3.0113"),
    ("CP.1.1.3.0113.12", "ARTICLE 12: Compétence générale des juridictions de la République", "CP.1.1.3.0113"),
    ("CP.1.1.4.0114.13", "ARTICLE 13: Exclusion de la loi étrangère", "CP.1.1.4.0114"),
    ("CP.1.1.4.0114.14", "ARTICLE 14: Sentences étrangères", "CP.1.1.4.0114"),
    ("CP.1.1.4.0114.15", "ARTICLE 15: Effets des sentences étrangères", "CP.1.1.4.0114"),
    ("CP.1.1.4.0114.16", "ARTICLE 16: Exécution des sentences étrangères", "CP.1.1.4.0114"),
    ("CP.1.2.1.0121.17", "ARTICLE 17: Légalité des peines et infractions", "CP.1.2.1.0121"),
    ("CP.1.2.1.0121.18", "ARTICLE 18: Peines principales", "CP.1.2.1.0121"),
    ("CP.1.2.1.0121.18-1", "ARTICLE 18-1: Peines alternatives", "CP.1.2.1.0121"),
    ("CP.1.2.1.0121.19", "ARTICLE 19: Peines accessoires", "CP.1.2.1.0121"),
    ("CP.1.2.1.0121.20", "ARTICLE 20: Mesures de sûreté", "CP.1.2.1.0121"),
    ("CP.1.2.1.0121.21", "ARTICLE 21: Classification des infractions", "CP.1.2.1.0121"),
    ("CP.1.2.2.1.22", "ARTICLE 22: Conditions préalables à l'exécution", "CP.1.2.1.0121"),
    ("CP.1.2.2.1.23", "ARTICLE 23: Exécution", "CP.1.2.2.1"),
    ("CP.1.2.2.2.24", "ARTICLE 24: Emprisonnement", "CP.1.2.2.2"),
    ("CP.1.2.2.2.25", "ARTICLE 25: Pécule", "CP.1.2.2.2"),
    ("CP.1.2.2.3.25-1", "ARTICLE 25-1: Amende", "CP.1.2.2.3");
    ##("", "", ""),
	##("", "", "");

insert into alinea
	values ("CP.1.1.1.0111.1.a", "Le livre I, constitué des articles 1 à 101.", "CP.1.1.1.0111.1"),
    ("CP.1.1.1.0111.1.b", "Le livre II, constitué des articles 102 à 361.", "CP.1.1.1.0111.1"),
    ("CP.1.1.1.0111.1.c", "Le décret portant partie réglementaire du Code Pénal définissant les contraventions, des articles 362 à 370.", "CP.1.1.1.0111.1"),
    ("CP.1.1.1.0111.1.d", "Les articles 371 et 372 fixant les dispositions transitoires et finales.", "CP.1.1.1.0111.1"),
    ("CP.1.1.1.0111.1-1.0", "Aucune exemption.", "CP.1.1.1.0111.1-1"),
    ("CP.1.1.1.0111.2.1", "Les règles de droit international, ainsi que les traités dûment promulgués et publiés, s'imposent au présent Code, ainsi qu'à toute disposition pénale.", "CP.1.1.1.0111.2"),
    ("CP.1.1.1.0111.2.2", "Le présent Livre s'impose à toute autre disposition pénale, sauf disposition spéciale visant notamment l'interdiction du sursis et l'interdiction ou la limitation des circonstances atténuantes édictées même antérieurement à l'entrée en vigeur du présent Livre par une loi ou un texte règlementaire ayant portée législative. Le présent alinéa rétroagit au 1er octobre 1966 inclusivement.", "CP.1.1.1.0111.2"),
	("CP.1.1.1.0111.2.3", "   ", "CP.1.1.1.0111.2");
    ##("", "", ""),
    ##("", "", "");