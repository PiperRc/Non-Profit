import Navigation from "./Navigation.astro";
import Footer from "./Footer.astro";
import Header from "./Header.astro";
import Scripts from "./Scripts.astro";

<Fragment>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<Header />
</head>

<body>
<Navigation />


<main>
<slot />
</main>

<a href="#" class="top">
<i class="fa-solid fa-arrow-up fa-3x"></i>
</a>

<Footer />
<Scripts />

</body></html>
</Fragment>;
