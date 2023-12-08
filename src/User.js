import "./App.css";
import React, { useEffect } from "react";
// import logo from "./images/ecomap.png";
// import google from "./images/android.png";
// import appstore from "./images/apple.png";
import map from "./images/map.png";
import interactiveMap from "./images/interractive.png";
import certfied from "./images/certfied.png";
import guide from "./images/guide.png";
import ecomaplogo from "./images/ecomaplogo.png";
import phone from "./images/phone.png";
import ampoule from "./images/ampoule.png";
import label from "./images/label.png";
import etoile from "./images/etoile.png";
import apple from "./images/apple.png";
import google from "./images/googleplay.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";

const User = () => {
  const [state, handleSubmit] = useForm("mleyqdyv");

  const [succesForm, setSuccesForm] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setSuccesForm(true);
    }
  }, [state.succeeded]);

  return (
    <div className="User">
      <nav class="bg-white border-gray-200 navBackground">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={ecomaplogo} class="h-16" alt="Flowbite Logo" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden   "
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            class={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 navBackground">
              <li>
                <a
                  href="#propos"
                  class=" textNav block py-2 px-3 text-black  rounded md:bg-transparent"
                >
                  A propos
                </a>
              </li>
              <li>
                <a
                  href="#form"
                  class=" textNav block py-2 px-3 text-black  rounded md:bg-transparent"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link
                  className="textNav block py-2 px-3 text-black  rounded md:bg-transparent"
                  to="/"
                >
                  Espace particulier
                </Link>
              </li>
              <li>
                <Link
                  className="textNav block py-2 px-3 text-black  rounded md:bg-transparent"
                  to="/pro"
                >
                  Espace entreprise
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="backgroundcolor1User  ">
        <div className="backgroundcolor1User max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <div className="flex flex-col">
            <span className="textUser">
              ÉcoMap : Localisez les endroits éco-responsables près de chez
              vous.
            </span>
            <div className="sectionUser">
              <a href="#section">
                <button className="text-2User">Découvrir</button>
              </a>
            </div>
          </div>
          <div className="imgUser hidden md:block " />
        </div>
      </div>

      <div className="ContainerPourquoi">
        <div className=" container mx-auto px-6 flex flex-col justify-center items-center">
          <div className="container flex flex-col">
            <div className="ContainerTitlePourquoi">
              <h1 className="TitlePourquoi mt-28" id="section">
                Pourquoi avoir besoin d'ÉcoMap ?
              </h1>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-16 lg:gap-24 mb-20 sm:mb-36 lg:mb-52">
            <div className="card">
              <div className="card-header flex ">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c0c2c7f4cfa6b3676802fa63f9813fec145bc6040e3216687ca14713df2b1e1?"
                  className="mr-3"
                />
                <p className="card-header-text">Trouves ton resto</p>
              </div>
              <div className="card-body">
                <div className="card-text">
                  <p>
                    Régalez-vous dans un restaurant qui réunis toutes tes
                    valeurs.
                  </p>
                </div>
                <div className="card-image">
                  <img className="imagepro" src={ampoule}></img>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header flex ">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/534a7e189cbc37f2e3648ba84ecc4111094e57e1444829889f44e40bcaaf2e3b?"
                  className="mr-3"
                />
                <p className="card-header-text">Découvre ses labels</p>
              </div>
              <div className="card-body">
                <div className="card-text">
                  <p>
                    Découvrez les critères d'un lieu véritablement
                    éco-responsable avec ses labels.
                  </p>
                </div>
                <div className="card-image">
                  <img src={label} className="overflow-auto"></img>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header flex ">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a4490ff4a43b83b34207897c0daf8d847ad670f1e375b4ec6ea4cab4ed2b988?"
                  className="mr-3"
                />
                <p className="card-header-text">Avis constructif</p>
              </div>
              <div className="card-body">
                <div className="card-text">
                  <p>
                    Laissez vos commentaires pour que votre lieu préféré puisse
                    s'épanouir !
                  </p>
                </div>
                <div className="card-image">
                  <img src={etoile}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="containerColorStat">
        <div className="container flex flex-col mx-auto px-6 md:flex-row">
          <div className="flex flex-col items-stretch w-full md:w-2/3">
            <div className="flex flex-col mt-2 items-start">
              <div className="text-orange-100 text-lg font-bold self-stretch whitespace-nowrap mt-16 md:text-xl">
                Un coup d'œil sur les statistiques
              </div>
              <div className="text-orange-100 text-5xl font-bold self-stretch  md:text-6xl md:mt-10">
                Nous croyons à l'avenir des restaurants verts en France !
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-stretch w-full mt-5 md:w-1/3 md:mt-0"
            id="propos"
          >
            <div className="containerBox mt-16">
              <div className="box77">
                <div className="text-gray-400 text-4xl font-bold whitespace-nowrap ml-9">
                  77 %
                </div>
                <div className="text-slate-700 text-center text-lg font-medium leading-6 self-stretch mt-7">
                  des Français aimeraient trouver des produits alimentaires
                  locaux et bio en restaurants.
                </div>
              </div>
              <div className="box37 mt-5 md:mt-10">
                <div className="text-red-400 text-4xl font-bold whitespace-nowrap mt-6">
                  37 %
                </div>
                <div className="text-slate-700 text-center text-lg font-medium leading-6 self-stretch mt-7 mb-4">
                  Cependant, seulement 37 % des restaurants en proposent.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="containerColorDiscover">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col justify-center items-center">
          <div className="flex flex-col w-full items-start">
            <div className="text-orange-100 text-right text-lg font-bold whitespace-nowrap mr-4 sm:mr-7 mt-8 sm:mt-16 max-w-full">
              Le concept
            </div>
            <div className="text-orange-100 text-2xl sm:text-4xl font-bold w-full sm:w-auto mr-4 sm:mr-7 mt-4 sm:mt-9 mb-6 sm:mb-10">
              Découvrez ÉcoMap, votre guide d'éco-responsabilité tout-en-un
            </div>
          </div>

          <div className="flex flex-col sm:flex-row w-full mr-4 sm:mr-7 mt-4 mb-12 sm:mb-24">
            <div className="flex flex-col w-full sm:w-1/2 pr-0 sm:pr-5 mb-6 sm:mb-0">
              <div className="text-orange-100 text-lg sm:text-xl font-medium mt-4 sm:mt-28">
                Plus besoin de se prendre la tête pour choisir un restaurant qui
                est aligné avec vos valeurs, avec Ecomap, retrouvez:
                <ul className="liste mt-6 sm:mt-9 ml-4 sm:ml-9">
                  <li className="dote">
                    Les restaurants éco-responsables autour de vous
                  </li>
                  <li className="dote">
                    Un guide détaillé des labels éco-responsables
                  </li>
                  <li className="dote">
                    Une plateforme pour défendre votre restaurant favoris et le
                    faire connaître !
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col w-full sm:w-1/2">
              <img
                loading="lazy"
                srcSet={map}
                className="imageDiscover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="containerColorForm pt-8 md:pt-28">
        <div
          className="container mx-auto px-4 md:px-6 py-2 flex flex-col w-full mb-16 md:mb-28"
          id="form"
        >
          <h1 className="titleCallToAction text-lg md:text-xl lg:text-2xl">
            Vous voulez en savoir plus ?
          </h1>
          <p className="textCallToAction text-sm md:text-base lg:text-lg">
            Saisissez votre adresse électronique pour obtenir plus
            d'informations sur l'EcoMap.
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-full">
          <form
            onSubmit={handleSubmit}
            className="containerForm w-full flex justify-center"
          >
            <div className="flex bg-gray-800 flex-col px-4 md:px-8 py-6 md:py-12 rounded-3xl w-full md:w-3/4 lg:w-1/2">
              <div className="text-orange-100 text-lg md:text-xl font-medium mb-4">
                Contact email
              </div>
              <div className="containerInput flex flex-col md:flex-row gap-4 md:gap-5 mb-7">
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="Saisissez votre adresse e-mail"
                  className="w-full p-2 md:p-4 rounded-xl border border-[color:var(--background-color-white-beige,#F6F1DE)] text-neutral-400 bg-gray-700"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full md:w-auto px-4 md:px-8 py-2 rounded-xl text-slate-700 bg-orange-100"
                >
                  Recevoir l'info
                </button>
              </div>
            </div>
          </form>
          {succesForm && (
            <div className="text-green-500">Merci de votre engagement</div>
          )}
        </div>
      </div>

      <div className="containerFooter pb-16">
        <div className="container mx-auto px-6 flex-col">
          <div className="max-w-screen-xl flex flex-wrap  justify-between mx-auto p-4">
            <div className="flex flex-col items-stretch w-[22%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch mt-6 max-md:mt-10">
                <div className="text-orange-100 text-4xl font-bold grow whitespace-nowrap justify-between pt-6 items-end">
                  Eco-map
                </div>
                <div className="flex items-stretch justify-between gap-4 mt-14 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d8d6d39ade1f2ff4e331601766318c5182c5555c3ab83ae87c249063484f6f8?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-orange-100 text-xl font-medium self-center grow whitespace-nowrap my-auto">
                    Twitter
                  </div>
                </div>
                <div className="flex items-stretch justify-between gap-4 mt-6">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a938ec19c5e2abb2f422914421c90a6032f3368e4191c28441090af65de379c4?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-orange-100 text-xl font-medium self-center grow whitespace-nowrap my-auto">
                    YouTube
                  </div>
                </div>
                <div className="flex items-stretch justify-between gap-4 mt-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fa59f38f27340a5c0073cedadc51f3e542c41df9de5d845f100c9853587906b?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-orange-100 text-xl font-medium grow whitespace-nowrap mt-1 self-start">
                    Instagram
                  </div>
                </div>
                <div className="flex items-stretch justify-between gap-4 mt-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d463f1f6d9ccc369ef6c9d7af2af578b84ec95188fcedd94f935c8f2839b320?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-orange-100 text-xl font-medium self-center grow whitespace-nowrap my-auto">
                    Facebook
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[56%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex items-start justify-between gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
                <div className="text-orange-100 text-xl font-medium whitespace-nowrap self-start">
                  À propos
                </div>
                <div className="text-orange-100 text-xl font-medium">
                  Nos partenaires
                </div>
                <div className="text-orange-100 text-xl font-medium">
                  Contacts
                </div>

                <div>
                  <div className="text-orange-100 text-xl font-medium whitespace-nowrap self-start">
                    Télécharger l'application
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="appDownload">
                      <a href="https://www.apple.com/apps/">
                        <img src={apple}></img>
                      </a>
                    </div>
                    <div className="appDownload">
                      <a href="https://play.google.com/store/apps?utm_source=emea_Med&utm_medium=hasem&utm_content=Oct2022&utm_campaign=Evergreen&pcampaignid=MKT-EDR-emea-fr-1001280-Med-hasem-ap-Evergreen-Oct2022-Text_Search_BKWS-EN_EXPANSION%7CONSEM_kwid_43700073551707885&gclid=CjwKCAiA98WrBhAYEiwA2WvhOk7H1PUKrCzpu2ahNGg4XbzvKSZvIDqIqPWG9V7UmMI9mrp1dcGC9xoCxPQQAvD_BwE&gclsrc=aw.ds&pli=1">
                        <img src={google}></img>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
