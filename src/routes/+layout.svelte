<script>
	/** @type {import('./$types').LayoutData}*/
	import "../app.css"
	// export let data;
</script>

<!-- header section -->


<div class="navbar bg-base-100 shadow-sm">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a href="/maps">Maps</a></li>
        <li>
          <a>Parent</a>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a href="/" class="btn btn-ghost text-xl">Joel Wiseman</a>
  </div>
  <!-- large screen menu -->
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/maps">Maps</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <!-- for existing users -->
  <!-- <div class="navbar-end">
    <a href="/login" class="btn btn-primary text-cyan-200">Login</a>
  </div> -->
  <!-- for new users -->
   <div class="navbar-end">
		<a href="/start" class="btn">Get Started</a>
   </div>
</div>











<slot />
<p>this is a test</p>

