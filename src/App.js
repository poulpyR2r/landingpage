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
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useForm, ValidationError } from "@formspree/react";

function App() {
  const [state, handleSubmit] = useForm("mleyqdyv");

  const [succesForm, setSuccesForm] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setSuccesForm(true);
    }
  }, [state.succeeded]);

  return (
    <div className="App">
      <div className="container mx-auto ">
        <header className="sm:px-8 px-2 py-2 z-10 ">
          <nav className="flex justify-between items-center max-container">
            <a href="/" className="">
              <img className="logo" src={ecomaplogo}></img>
            </a>
            <ul className=" flex justify-center items-center gap-16 max-lg:hidden">
              <li>
                <a class="px-4 font-bold" href="/">
                  About us
                </a>
              </li>
              <li>
                <a
                  class="px-4 hover:text-gray-800"
                  href="#form"
                  onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                  }}
                >
                  Contact us
                </a>
              </li>
            </ul>

            <div
              className="hidden max-lg:block cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <RxHamburgerMenu className="text-4xl" />
            </div>
          </nav>
        </header>
        {isMenuOpen && (
          <div>
            <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100  ">
              <div
                className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                <AiOutlineClose className="text-4xl" />
              </div>
              <ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
                <li>
                  <a
                    class="px-4 font-bold"
                    href="/"
                    onClick={() => {
                      setIsMenuOpen(!isMenuOpen);
                    }}
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    class="px-4 hover:text-gray-800"
                    href="#form"
                    onClick={() => {
                      setIsMenuOpen(!isMenuOpen);
                    }}
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>

      {/* hero  */}

      <div className="Container1 py-20">
        <div className="container flex mx-auto px-6">
          <h1 className="TextHero">
            Bienvenue sur EcoMap ! Votre guide de la consommation
            éco-responsable
          </h1>
          <div className="flex justify-center items-center mt-6">
            <img className="imageMap" src={map}></img>
          </div>
        </div>
        <div className="flex justify-center items-center mt-0">
          <a href="#section">
            <button className="Button animate-bounce"> Découvrire</button>
          </a>
        </div>
      </div>

      {/* SECTION */}
      <div className="container py-20 mx-auto" id="section">
        <div className="px-6 mb-28">
          <h1 className="titlePropose">Ce qu’on vous propose</h1>
        </div>
        <div className="px-6 flex justify-center">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src={interactiveMap}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Carte interactive !
                  </div>
                  <p className="text-gray-700 text-base">
                    Une carte interactive pour localiser des emplacements dédiés
                    à des causes engagées.
                  </p>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={certfied} alt="certifié" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Certifié !</div>
                  <p className="text-gray-700 text-base">
                    Recherchez et identifiez des emplacements certifié en
                    utilisant des filtres.
                  </p>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={guide} alt="Guide" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Explication !</div>
                  <p className="text-gray-700 text-base">
                    Un manuel détaillé fournissant des explications complètes
                    sur les différents labels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container mx-auto px-6 py-2 flex flex-col  w-full mb-28"
        id="form"
      >
        <h1 className="titleCallToAction">Vous voulez en savoir plus ?</h1>
        <p className="textCallToAction">
          Saisissez votre adresse électronique pour obtenir plus d'informations
          sur l'EcoMap.
        </p>
      </div>
      <div className="flex w-full">
        <form
          onSubmit={handleSubmit}
          className="containerForm w-full flex justify-center"
        >
          <div className="flex bg-gray-800  flex-col px-8 py-12 rounded-3xl w-1/2">
            <div className="text-orange-100 text-xl font-medium mb-4">
              Contact email
            </div>
            <div className="containerInput flex gap-5 mb-7">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Saisissez votre adresse e-mail"
                className="w-full p-4 rounded-xl border border-[color:var(--background-color-white-beige,#F6F1DE)] text-neutral-400 bg-gray-700"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <button
                type="submit"
                disabled={state.submitting}
                className="px-8 rounded-xl text-slate-700 bg-orange-100"
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

      <div className="bg-slate-700 pl-14 pr-8 py-12 max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
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
                About us
              </div>
              <div className="text-orange-100 text-xl font-medium">
                Our partners
              </div>
              <div className="text-orange-100 text-xl font-medium">
                Contact us
              </div>
              <div>
                <div className="text-orange-100 text-xl font-medium whitespace-nowrap self-start">
                  Download the app
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
