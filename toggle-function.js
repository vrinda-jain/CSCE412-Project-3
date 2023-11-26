function load_style()
{
	page_style = localStorage.getItem("page_stylesheet_name");
	if (page_style == null)
	{
		page_style = "landingpage2.css";
	}
	document.getElementById('page_style').setAttribute("href", page_style);
}

function light_mode()
{
    localStorage.setItem("page_stylesheet_name", "landingpage2.css");
	load_style();
}

function dark_mode()
{
    localStorage.setItem("page_stylesheet_name", "landingpage.css");
	load_style();
}

load_style()  // load style immediately