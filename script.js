const test_button = document.querySelector(".test_button");

function show_damage_text(amount, top, left, type){
    let damage_text_container = document.createElement("div");
    damage_text_container.classList.add("number_container");
    document.body.appendChild(damage_text_container);

    for (const digit of String(amount)){
        let damage_text_img = document.createElement("img");
        damage_text_img.classList.add("number_image");
        damage_text_img.src="numbers/"+digit+type+".png";
        damage_text_container.appendChild(damage_text_img);
    }

    damage_text_container.style.left=String(left + (Math.random() * 5) - 2)+"vw";
    damage_text_container.style.top=String(top  + (Math.random() * 5) - 2)+"vh";
    
    function aa(count){
        damage_text_container.style.top=String(top-count)+"vh";
        const images = damage_text_container.querySelectorAll("img");
        images.forEach(img =>{
            img.style.opacity = String(1-count/50);
        })
        count++;
        if(count!==101) {
            setTimeout(() => aa(count), 16);
        }
        else{

        }
    }
    setTimeout(() => aa(1), 96);
}

test_button.onclick = () => show_damage_text(Math.floor(Math.random() * 500), 40, 40, "a")