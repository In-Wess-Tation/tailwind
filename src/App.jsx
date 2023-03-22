
function App() {

  return (
    <>
    <header className="bg-darkBlue text-white p-14 pb-40">
      <div className=' flex justify-between pb-5 '>
        <h1 className="text-4xl font-bold">Boldo</h1>
        <nav className='space-x-5 mr-14'>
          <a href="#">Product</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <button className="bg-white p-2 px-7 rounded-full text-black">Log In</button>
        </nav>
      </div>

      <article className="grid grid-rows-1 grid-cols-2 pt-16">
        <div className="w-4/5">
          <h1 className="text-5xl pb-9">Save time bybuilding fast with Boldo Template</h1>
          <p>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
          <div className="space-x-5 pt-9">
            <button className="bg-teal p-3 px-14 rounded-full font-bold text-darkBlue">Buy templates</button>
            <button className="border-2 p-3 border-white hover:bg-white hover:text-black px-14 rounded-full ">Explore</button>
          </div>
        </div>

        <div className="space-y-8 mr-14">
          <figure className="h-48 rounded-lg bg-orange-300">Big box</figure>
          <div className="grid grid-rows-1 grid-cols-2 h-32">
            <figure className="bg-red-300 rounded-lg w-[17rem]">Small box one</figure>
          <figure className="bg-peach rounded-lg">Small box two</figure>
          </div>
          
        </div>
      </article>
    </header>


    <main className="px-14 pt-24 bg-gray-100">
      <section className="pb-14">
        <p className="text-center text-gray-500">Our Services</p>
        <h2 className="text-center text-5xl mx-60 pb-14">Handshake infrographic mass market crowdfunding iteration</h2>

        <article className="flex justify-center gap-14">
          <div className="box-border h-[25rem] w-72 p-4">
            <figure className="box-border h-72 w32 p-4 mb-4 rounded-lg bg-teal">Medium box</figure>
            <h3 className="text-xl">Lorem, ipsum dolor.</h3>
            <p className="text-gray-500 pb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <a className="underline" href="#">Explore page </a>
          </div>
          <div className="box-border h-[25rem] w-72 p-4">
            <figure className="box-border h-72 w32 p-4 mb-4 rounded-lg bg-gray-300">Medium box</figure>
            <h3 className="text-xl">Lorem, ipsum dolor.</h3>
            <p className="text-gray-500 pb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <a className="underline" href="#">Explore page </a>
          </div>
          <div className="box-border h-[25rem] w-72 p-4">
            <figure className="box-border h-72 w32 p-4 mb-4 rounded-lg bg-teal">Medium box</figure>
            <h3 className="text-xl">Lorem, ipsum dolor.</h3>
            <p className="text-gray-500 pb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <a className="underline" href="#">Explore page </a>
          </div>
        </article>
      </section>
        
      <section className="flex justify-between px-60 py-36">
        <figure className="box-border h-[20rem] w-[20rem] rounded-lg p-4 bg-gray-300">Big box</figure>
        <article className="box-border h-[20rem] w-[27rem] p-4 pt-14">
          <h2 className="text-3xl">We connect our customers with the best, and help them keep up-and stay open.</h2>

          <article className="leading-8 pt-14">
            <div className="flex gap-4 pb-4">
              <figure className="box-border h-10 w-10 bg-darkBlue text-white rounded-full">Check</figure>
              <p>We connect our customers with the best.</p>
            </div>
            <div className="flex gap-4 pb-4">
              <figure className="box-border h-10 w-10 bg-darkBlue text-white rounded-full">Check</figure>
              <p>Advisor success customer launch party.</p>
            </div>
            <div className="flex gap-4 pb-4">
              <figure className="box-border h-10 w-10 bg-darkBlue text-white rounded-full">Check</figure>
              <p>busness-to-consumer long tail.</p>
            </div>
            <button className="bg-sky-900 p-1 px-14 rounded-full font-bold text-white mt-4">Start now</button>
          </article>
         
        </article>
      </section>

      <section className="flex justify-center gap-[10rem] py-24">
        <article className="box-border h-[20rem] w-[27rem] p-4 pt-14">
          <h1 className="text-3xl">We connect our customers with the best, and help them keep up-and stap open.</h1>
          <button className="bg-white p-2 w-[100%] text-start hover:bg-darkBlue hover:text-white mt-14">We connect our customers with the best.</button>
          <button className="bg-white p-2 w-[100%] text-start hover:bg-darkBlue hover:text-white mt-4">Advisor success customer launch party.</button>
          <button className="bg-white p-2 w-[100%] text-start hover:bg-darkBlue hover:text-white mt-4">Business-to-consumer long tail.</button>
        </article>
        <figure className="box-border h-[20rem] w-[20rem] rounded-lg p-4 bg-gray-300">Big box</figure>
      </section>

      <section>

      </section>

    </main>


    <footer className="flex p-14 bg-gray-100">
      <article className="">
        <h1 className="text-5xl font-bold pb-4">Boldo</h1>
        <p className="text-gray-500 w-2/4 pb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta est eos quae distinctio accusantium.</p>
        <p className="text-gray-500">Lorem ipsum dolor sit.</p>
      </article>

      <article className="grid grid-cols-3 grid-rows-1 gap-24">
      <div className="grid grid-rows-4">
        <h3 className="text-xl font-bold">Landing</h3>
        <a className="text-gray-500" href="#">Home</a>
        <a className="text-gray-500" href="#">Products</a>
        <a className="text-gray-500" href="#">Services</a>
      </div>
      <div className="grid grid-rows-4">
        <h3 className="text-xl font-bold">Company</h3>
        <a className="text-gray-500" href="#">Home</a>
        <a className="text-gray-500" href="#">Careers</a>
        <a className="text-gray-500" href="#">Services</a>
      </div>
      <div className="grid grid-rows-4">
        <h3 className="text-xl font-bold">Recources</h3>
        <a className="text-gray-500" href="#">Blog</a>
        <a className="text-gray-500" href="#">Products</a>
        <a className="text-gray-500" href="#">Services</a>
      </div>
      </article>
    </footer>
    </>
  )
}

export default App
