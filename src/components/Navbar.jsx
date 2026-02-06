 import logo  from "../assets/logo.png"
 
 const Navbar = ()=>{
return(
    <>
    
<header class="fixed w-full z-20 top-0 start-0">
  <nav class="bg-neutral-primary">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-5xl p-4">

         <ul class="flex flex-row font-medium mt-0 space-x-15 rtl:space-x-reverse text-sm">
                  <li>
                      <a href="#" class="text-heading hover:underline" aria-current="page">Home</a>
                  </li>
                  <li>
                      <a href="#" class="text-heading hover:underline">Company</a>
                  </li>
                  <li>
                      <a href="#" class="text-heading hover:underline">Team</a>
                  </li>
                  <li>
                      <a href="#" class="text-heading hover:underline">Features</a>
                  </li>
              </ul>
          <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={logo} class="h-7" alt="Flowbite Logo" />
              <span class="self-center text-xl text-heading font-semibold whitespace-nowrap">Circle</span>
          </a>
             <ul class="flex flex-row font-medium mt-0 space-x-15 rtl:space-x-reverse text-sm">
                  <li>
                      <a href="#" class="text-heading hover:underline" aria-current="page">Home</a>
                  </li>
                  <li>
                      <a href="#" class="text-heading hover:underline">Company</a>
                  </li>
                 
              </ul>
          <div class="flex items-center space-x-6 rtl:space-x-reverse">
             
              <a href="#" class="text-sm font-medium border-2 px-12 text-blue-400 border-blue-400 py-2 text-fg-brand hover:underline">Login</a>
          </div>
      </div>
  </nav>
 
</header>

    </>
)
 }

 export default Navbar