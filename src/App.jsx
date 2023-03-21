
function App() {

  return (
    <>
    <header className="bg-sky-900 text-white p-14">
      <div className=' flex justify-between pb-5 '>
        <h1 className="text-4xl font-bold">Boldo</h1>
        <nav className='space-x-5'>
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
            <button className="bg-emerald-500 p-3 px-14 rounded-full font-bold text-sky-900">Buy templates</button>
            <button className="border-2 p-3 border-white hover:bg-white hover:text-black px-14 rounded-full ">Explore</button>
          </div>
        </div>

        <div className="space-y-3 w-3/4">
          <figure className="h-40 rounded-lg bg-orange-300">Big box</figure>
          <div className="grid gap-4 grid-rows-1 grid-cols-2 h-24">
            <figure className="bg-red-300 rounded-lg">Small box one</figure>
          <figure className="bg-green-200 rounded-lg">Small box two</figure>
          </div>
          
        </div>
      </article>
    </header>


    <main>
      <h2>Handshake infrographic mass market crowdfunding iteration</h2>

      <div>
        <figure>Medium box</figure>
        <h3>Lorem, ipsum dolor.</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <a href="#">Elspore page </a>
      </div>
      <div>
        <figure>Medium box</figure>
        <h3>Lorem, ipsum dolor.</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <a href="#">Elspore page </a>
      </div>
      <div>
        <figure>Medium box</figure>
        <h3>Lorem, ipsum dolor.</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <a href="#">Elspore page </a>
      </div>
    </main>


    <footer>
      <article>
        <h1>Boldo</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta est eos quae distinctio accusantium.</p>
        <p>Lorem ipsum dolor sit.</p>
      </article>
      <div>
        <h3>Landing</h3>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Services</a>
      </div>
      <div>
        <h3>Company</h3>
        <a href="#">Home</a>
        <a href="#">Careers</a>
        <a href="#">Services</a>
      </div>
      <div>
        <h3>Recources</h3>
        <a href="#">Blog</a>
        <a href="#">Products</a>
        <a href="#">Services</a>
      </div>
    </footer>
    </>
  )
}

export default App
