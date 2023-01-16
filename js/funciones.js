/* Funciones para habilitar / deshabilitar el botón del alfajor */ 
const nav_Toggle = document.querySelector(".navToggle");
const nav_Menu = document.querySelector(".navMenu");

nav_Toggle.addEventListener("click", () => {
    nav_Menu.classList.toggle("navMenuVisible");

    if (nav_Menu.classList.contains("navMenuVisible")) {
        nav_Toggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        nav_Toggle.setAttribute("aria-label", "Abrir menú");
    }
});
/* Fin funciones habilitar/deshabilitar alfajor */

/* Habilitar secciones */

function toggle_exp() {
    /*navMenuVisible.style.display = "none";*/
    seccionHabilidades.style.display = 'none';
    let sec_exp = document.getElementById("seccionExperiencia");
    /* if (sec_exp.style.display == 'block')
       sec_exp.style.display = 'none';
    else */
       sec_exp.style.display = 'block';
}

function toggle_hab() {
    seccionExperiencia.style.display = 'none';
    let sec_hab = document.getElementById("seccionHabilidades");
    /* if (sec_hab.style.display == 'block')
       sec_hab.style.display = 'none';
    else */
       sec_hab.style.display = 'block';
}

function toggle_all() {
    seccionExperiencia.style.display = "block";
    seccionHabilidades.style.display = "block";
}

/* Los if comentados en las funciones toggle_exp y toggle_hab, son para mostrar u ocultar según estén ocultos o visibles */
/* los quité porque decidí que los botones muestren solamente */