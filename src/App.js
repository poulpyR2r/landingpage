import "./App.css";
import React, { useEffect } from "react";
// import logo from "./images/ecomap.png";
// import google from "./images/android.png";
// import appstore from "./images/apple.png";
import map from "./images/map.png";
import { useForm, ValidationError } from "@formspree/react";

function App() {
  const [state, handleSubmit] = useForm("mleyqdyv");

  const [succesForm, setSuccesForm] = React.useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setSuccesForm(true);
    }
  }, [state.succeeded]);

  return (
    <div className="App">
      <nav className="Container1">
        <div class=" container mx-auto px-6 py-2 flex justify-between items-center w-full">
          <a class="font-bold text-2xl lg:text-4xl" href="#">
            Eco-Map
          </a>
          <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
              <svg
                class="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>XXXXXX</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div class="hidden lg:block">
            <ul class="inline-flex">
              <li>
                <a class="px-4 font-bold" href="/">
                  Product
                </a>
              </li>
              <li>
                <a class="px-4 font-bold" href="/">
                  About us
                </a>
              </li>
              <li>
                <a class="px-4 hover:text-gray-800" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a class="px-4 hover:text-gray-800" href="#">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

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
        <div className="flex justify-center items-center mt-6">
          <button className="Button">Explore</button>
        </div>
      </div>

      {/* SECTION */}
      <div className="Container2 py-20">
        <div className="container mx-auto px-6  flex justify-center">
          <div>
            <div class="grid grid-cols-3 gap-48">
              <div className="Card">
                <div className="titleCard flex flex-col justify-center pl-9 pr-16 py-6 rounded-[32px_32px_0px_0px] items-start max-md:px-2">
                  <div className="justify-center items-center flex  max-w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/518f68182f7f7d4614e4bb585c6470980f2bc914cde17383d7fbd19b99232022?"
                      className="aspect-square object-contain object-center w-[60px] overflow-hidden shrink-0 flex-1 my-auto mr-4"
                    />
                    <div className="text-gray-800 text-2xl font-bold self-stretch grow whitespace-nowrap">
                      7
                    </div>
                  </div>
                </div>
                <div className="bodyCard">
                  Une carte interactive pour localiser des emplacements dédiés à
                  des causes engagées.
                </div>
              </div>
              <div className="Card">
                <div className="titleCard flex flex-col justify-center pl-9 pr-16 py-6 rounded-[32px_32px_0px_0px] items-start max-md:px-2">
                  <div className="justify-center items-center flex   max-w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/518f68182f7f7d4614e4bb585c6470980f2bc914cde17383d7fbd19b99232022?"
                      className="aspect-square object-contain object-center w-[60px] overflow-hidden shrink-0 flex-1 my-auto mr-4"
                    />
                    <div className="text-gray-800 text-2xl font-bold self-stretch grow whitespace-nowrap">
                      80%
                    </div>
                  </div>
                </div>
                <div className="bodyCard">
                  Recherchez et identifiez des emplacements à certifier en
                  utilisant des filtres.
                </div>
              </div>
              <div className="Card">
                <div className="titleCard flex flex-col justify-center pl-9 pr-16 py-6 rounded-[32px_32px_0px_0px] items-start max-md:px-2">
                  <div className="justify-center items-center flex  max-w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/518f68182f7f7d4614e4bb585c6470980f2bc914cde17383d7fbd19b99232022?"
                      className="aspect-square object-contain object-center w-[60px] overflow-hidden shrink-0 flex-1 my-auto mr-4"
                    />
                    <div className="text-gray-800 text-2xl font-bold self-stretch grow whitespace-nowrap">
                      58%
                    </div>
                  </div>
                </div>
                <div className="bodyCard">
                  Un manuel détaillé fournissant des explications complètes sur
                  les différents labels.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-2 flex flex-col  w-full mb-28">
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
