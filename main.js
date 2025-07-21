// GETTING THE NECESSARY ELEMENT BY ID
const input = document.getElementById('task-text');
const add = document.getElementById('add-task');
const listItem = document.getElementById('todo-list');
const selectAllCB = document.getElementById('selectCb');
const deleteAll = document.querySelector('.deleteAll');
/*  =================================================================== */

// CREATING A FUNCTION
const adding = e => {
    const listInput = input.value.trim();
    if (listInput !== '' && !selectAllCB.checked) {
        const li = document.createElement('li');
        // CREATING LI FOR HTML
        li.innerHTML = `
            <div class="row valign-wrapper">
                <div class="col s9">
                    <label>
                        <input class="checkbox filled-in" id="check" type="checkbox">
                        <span style="font-size: 20px; font-weight: 700; max-width: 100%; word-wrap: break-word;" class="task black-text" style="font-weight: 700;">${listInput}</span>
                    </label>
                </div>
                <div class="col s2">
                    <a href="#" class="remove">
                        <i class="delete material-icons">close</i>
                    </a>
                </div>
            </div>
        `;
        /*  =================================================================== */

        // STYLING LIST
        li.style.fontFamily = '"Architects Daughter", cursive';
        li.style.textTransform = 'uppercase';
         /*  =================================================================== */

        // INSERTING LI TO HTML
        listItem.appendChild(li);
        input.value = '';
         /*  =================================================================== */

        // FOR REMOVE/DELETE
        const x = li.querySelector('.remove');
        x.addEventListener('click', e => {
            li.remove(); 
        });
         /*  =================================================================== */

        // FOR CHECKBOX TO DO LIST
        const checkbox = li.querySelector('.checkbox');
        checkbox.addEventListener('change', e => {
            const liTask = li.querySelector('.task');
            if (checkbox.checked) {
                liTask.style.textDecoration = 'line-through 2px red';
            }
            else {
                liTask.style.textDecoration = 'none';
            }
        });
         /*  =================================================================== */

        // FOR SELECT ALL BUTTON
        selectAllCB.addEventListener('change', e => {
            const cbs = document.querySelectorAll('input[type="checkbox"]');
            const liTask = li.querySelectorAll('.task');
                if(selectAllCB.checked) {
                    cbs.forEach(e => {
                        e.checked = true;
                    });
                    liTask.forEach(liTask => {
                        liTask.style.textDecoration = 'line-through 2px red';
                    });
                }
                else {
                    cbs.forEach(e => {
                        e.checked = false;
                    });
                    liTask.forEach(liTask => {
                        liTask.style.textDecoration = 'none';
                    });
                }
        });
         /*  =================================================================== */
        
        // FOR BUTTON DELETE ALL
        deleteAll.addEventListener('click', e => {
            const liTask = li.querySelectorAll('.task');
            if(selectAllCB.checked) {
                liTask.forEach(e => {
                    li.remove();
                    x.remove();
                });
            }
            // else {
            //     alert("To delete all items, please click first the 'SELECT ALL' option");
            // }
        });
    }
    else if (selectAllCB.checked) {
        alert("To continue, please refrain from clicking 'SELECT ALL' option");
    }
    else {
        alert("Please input task for your TO-DO List");
    }
};
/*  =================================================================== */

// ADDING FUNCTIONS TO THE EVENTS
// IF THE USER PRESS ENTER
input.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        adding();
    }
});
// IF THE USER CLICK THE ADD BUTTON
add.addEventListener('click', adding);
/*  =================================================================== */

// FOR MUSIC PLAYLIST
// FOR MUSIC 1
const btnMusic1 = document.getElementById('music-btn1');
const btnRange1 = document.getElementById('progress');
const imgMusic = document.getElementById('img1');
const imgMusic1 = document.getElementById('img11');
const btnP = document.getElementById('previous-btn1');
const btnNext1 = document.getElementById('next-btn1');
const music = new Audio()
music.src = "music/music1.mp3";
/*  =================================================================== */

// FOR MUSIC 2
const btnMusic2 = document.getElementById('music-btn2');
const btnRange2 = document.getElementById('progress2');
const imgMusic2 = document.getElementById('img2');
const imgMusic22 = document.getElementById('img22');
const btnP2 = document.getElementById('previous-btn2');
const btnNext2 = document.getElementById('next-btn2');
const music2 = new Audio()
music2.src = "music/music2.mp3";
/*  =================================================================== */

// FOR BUTTON PLAY OF MUSIC 1
btnMusic1.addEventListener('click', e => {
    if(!music2.paused) {
        music2.pause();
        btnMusic2.querySelector("i").innerText = "play_arrow"; 
        imgMusic2.classList.remove("rotate");
        imgMusic22.classList.remove("rotate");

        btnRange2.value = 0;
        music2.currentTime = 0;
        if(music.paused){
            music.play();
            music2.pause();
            btnMusic1.querySelector("i").innerText = "pause";
            imgMusic.classList.add("rotate");
            imgMusic.classList.remove("paused");
            imgMusic1.classList.add("rotate");
            imgMusic1.classList.remove("paused");
                     
        }
        else {
            music.pause();
            btnMusic1.querySelector("i").innerText = "play_arrow"; 
            imgMusic.classList.add("paused");   
            imgMusic1.classList.add("paused");      
        }
    }
    else {
        if(music.paused){
            music.play();
            music2.pause();
            btnMusic1.querySelector("i").innerText = "pause";
            imgMusic.classList.add("rotate");
            imgMusic.classList.remove("paused");         
            imgMusic1.classList.add("rotate");
            imgMusic1.classList.remove("paused");     
        }
        else {
            music.pause();
            btnMusic1.querySelector("i").innerText = "play_arrow"; 
            imgMusic.classList.add("paused");   
            imgMusic1.classList.add("paused");      
        }
    }
});
/*  =================================================================== */

// FOR BUTTON PREVIOUS OF MUSIC 1
btnP.addEventListener('click', e => {
    if(!music2.paused) {
        btnNext1.disabled = true
    }
    else {
        btnRange1.value = 0;
        music.currentTime = 0;
        btnRange2.value = 0;
        music2.currentTime = 0;
        imgMusic.classList.remove("rotate"); 
        imgMusic1.classList.remove("rotate");
    
        music2.play();
        btnMusic2.querySelector("i").innerText = "pause";
        imgMusic2.classList.add("rotate");
        imgMusic2.classList.remove("paused"); 
        imgMusic22.classList.add("rotate");
        imgMusic22.classList.remove("paused"); 
    
        music.pause();
        btnMusic1.querySelector("i").innerText = "play_arrow"; 
        imgMusic.classList.add("paused"); 
        imgMusic1.classList.add("paused"); 
    }
});
/*  =================================================================== */

// FOR BUTTON NEXT OF MUSIC 1
btnNext1.addEventListener('click', e => {
    if(!music2.paused) {
        btnNext1.disabled = true
    }
    else {
        btnRange1.value = 0;
        music.currentTime = 0;
        btnRange2.value = 0;
        music2.currentTime = 0;
        imgMusic.classList.remove("rotate"); 
        imgMusic1.classList.remove("rotate"); 
    
        music2.play();
        btnMusic2.querySelector("i").innerText = "pause";
        imgMusic2.classList.add("rotate");
        imgMusic2.classList.remove("paused"); 
        imgMusic22.classList.add("rotate");
        imgMusic22.classList.remove("paused"); 
    
        music.pause();
        btnMusic1.querySelector("i").innerText = "play_arrow"; 
        imgMusic.classList.add("paused"); 
        imgMusic1.classList.add("paused"); 
    }
});
/*  =================================================================== */

// FOR BUTTON PLAY OF MUSIC 2
btnMusic2.addEventListener('click', e => {
    if(!music.paused) {
        music.pause();
        btnMusic1.querySelector("i").innerText = "play_arrow"; 
        imgMusic.classList.remove("rotate");
        imgMusic1.classList.remove("rotate");

        btnRange1.value = 0;
        music.currentTime = 0;
        if(music2.paused){
            music2.play();
            btnMusic2.querySelector("i").innerText = "pause";
            imgMusic2.classList.add("rotate");
            imgMusic2.classList.remove("paused");  
            imgMusic22.classList.add("rotate");
            imgMusic22.classList.remove("paused");         
        }
        else {
            music2.pause();
            btnMusic2.querySelector("i").innerText = "play_arrow"; 
            imgMusic2.classList.add("paused");     
            imgMusic22.classList.add("paused");      
        }
    }
    else {
        if(music2.paused){
            music2.play();
            btnMusic2.querySelector("i").innerText = "pause";
            imgMusic2.classList.add("rotate");
            imgMusic2.classList.remove("paused"); 
            imgMusic22.classList.add("rotate");
            imgMusic22.classList.remove("paused");     
        }
        else {
            music2.pause();
            btnMusic2.querySelector("i").innerText = "play_arrow"; 
            imgMusic2.classList.add("paused");    
            imgMusic22.classList.add("paused");      
        }
    }
});
/*  =================================================================== */

// FOR BUTTON PREVIOUS OF MUSIC 2
btnP2.addEventListener('click', e => {
    if(!music.paused) {
        btnNext2.disabled = true
    }
    else {
        btnRange1.value = 0;
        music.currentTime = 0;
        btnRange2.value = 0;
        music2.currentTime = 0;
        imgMusic2.classList.remove("rotate"); 
        imgMusic22.classList.remove("rotate"); 
    
        music.play();
        btnMusic1.querySelector("i").innerText = "pause";
        imgMusic.classList.add("rotate");
        imgMusic.classList.remove("paused"); 
        imgMusic1.classList.add("rotate");
        imgMusic1.classList.remove("paused"); 
    
        music2.pause();
        btnMusic2.querySelector("i").innerText = "play_arrow"; 
        imgMusic2.classList.add("paused"); 
        imgMusic22.classList.add("paused"); 
    }
});
/*  =================================================================== */

// FOR BUTTON NEXT OF MUSIC 2
btnNext2.addEventListener('click', e => {
    if(!music.paused) {
        btnNext2.disabled = true
    }
    else {
        btnRange1.value = 0;
        music.currentTime = 0;
        btnRange2.value = 0;
        music2.currentTime = 0;
        imgMusic2.classList.remove("rotate"); 
        imgMusic22.classList.remove("rotate"); 
    
        music.play();
        btnMusic1.querySelector("i").innerText = "pause";
        imgMusic.classList.add("rotate");
        imgMusic.classList.remove("paused"); 
        imgMusic1.classList.add("rotate");
        imgMusic1.classList.remove("paused"); 
    
        music2.pause();
        btnMusic2.querySelector("i").innerText = "play_arrow"; 
        imgMusic2.classList.add("paused"); 
        imgMusic22.classList.add("paused"); 
    }
});
/*  =================================================================== */

// IF THE SONG IS DONE PLAYING
// FOR MUSIC 1
music.onended = e => {
    btnMusic1.querySelector("i").innerText = "play_arrow"; 
    imgMusic.classList.remove("rotate");
    imgMusic.classList.remove("paused"); 
    imgMusic1.classList.remove("rotate");
    imgMusic1.classList.remove("paused"); 
    
    music2.play();
    btnMusic2.querySelector("i").innerText = "pause";
    imgMusic2.classList.add("rotate");
    imgMusic2.classList.remove("paused");
    imgMusic22.classList.add("rotate");
    imgMusic22.classList.remove("paused");

    btnRange1.value = 0;
    music.currentTime = 0 ;
};
/*  =================================================================== */

// FOR MUSIC 2
music2.onended = e => {
    btnMusic2.querySelector("i  ").innerText = "play_arrow"; 
  
    imgMusic2.classList.remove("rotate");
    imgMusic2.classList.remove("paused");  
    imgMusic22.classList.remove("rotate");
    imgMusic22.classList.remove("paused");  
    
    music.play();
    btnMusic1.querySelector("i").innerText = "pause";
    imgMusic.classList.add("rotate");
    imgMusic.classList.remove("paused");
    imgMusic1.classList.add("rotate");
    imgMusic1.classList.remove("paused");

    btnRange2.value = 0;
    music2.currentTime = 0;
};
/*  =================================================================== */

// FOR MUSIC RANGE OF MUSIC 1
btnRange1.addEventListener("input", e => {
    if(!music2.paused) {
        btnRange2.value = 0;
        music2.currentTime = 0;
        
        music2.pause();
        btnMusic2.querySelector("i").innerText = "play_arrow"; 
        imgMusic2.classList.remove("rotate"); 
        imgMusic22.classList.remove("rotate"); 

        const playTime = music.duration * (btnRange1.value / 100);
        music.currentTime = playTime;
        music.play();
    
        btnMusic1.querySelector("i").innerText = "pause";
        imgMusic.classList.add("rotate");
        imgMusic.classList.remove("paused"); 
        imgMusic1.classList.add("rotate");
        imgMusic1.classList.remove("paused"); 
    }
    else {
        const playTime = music.duration * (btnRange1.value / 100);
        music.currentTime = playTime;
        music.play();
    
        btnMusic1.querySelector("i").innerText = "pause";
        imgMusic.classList.add("rotate");
        imgMusic.classList.remove("paused");
        imgMusic1.classList.add("rotate");
        imgMusic1.classList.remove("paused");
    }
});
music.addEventListener("timeupdate", e => {
    const currentTime = (music.currentTime / music.duration) * 100;
    btnRange1.value = currentTime;
    btnRange1.style.background = `linear-gradient(to right, #2a254b ${currentTime}%, white ${currentTime}%)`;
});
/*  =================================================================== */

// FOR MUSIC RANGE OF MUSIC 2
btnRange2.addEventListener("input", e => {
    if(!music.paused) {
        btnRange1.value = 0;
        music.currentTime = 0;

        music.pause();
        btnMusic1.querySelector("i").innerText = "play_arrow"; 
        imgMusic.classList.remove("rotate"); 
        imgMusic1.classList.remove("rotate"); 

        const playTime2 = music2.duration * (btnRange2.value / 100);
        music2.currentTime = playTime2;
    
        music2.play();
        btnMusic2.querySelector("i").innerText = "pause";
        imgMusic2.classList.add("rotate");
        imgMusic2.classList.remove("paused"); 
        imgMusic22.classList.add("rotate");
        imgMusic22.classList.remove("paused");  

        btnRange1.value = 0;
        music.currentTime = 0;
    }
    else {
        const playTime2 = music2.duration * (btnRange2.value / 100);
        music2.currentTime = playTime2;
    
        music2.play();
        btnMusic2.querySelector("i").innerText = "pause";
        imgMusic2.classList.add("rotate");
        imgMusic2.classList.remove("paused"); 
        imgMusic22.classList.add("rotate");
        imgMusic22.classList.remove("paused");  
    }
});
music2.addEventListener("timeupdate", e => {
    const currentTime2 = (music2.currentTime / music2.duration) * 100;
    btnRange2.value = currentTime2;
    btnRange2.style.background = `linear-gradient(to right, #2a254b ${currentTime2}%, white ${currentTime2}%)`;
});
/*  =================================================================== */

// SHOW DINO SECTION
const btnShowDino = document.getElementById('btnShowDino');
const showDino = document.querySelector('.pop-up');
const btnOk = document.querySelector('.btnOk');

btnShowDino.addEventListener('click', e => {
    showDino.style.display = 'block';
    setTimeout(() => {
        showDino.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 50);
});

btnOk.addEventListener('click', e => {
    showDino.style.transform = 'translate(-50%, -50%) scale(0)';
    setTimeout(() => {
        showDino.style.display = 'none';
    }, 500);
});
/*  =================================================================== */

// ON SCROLL
const nav = document.querySelector('nav');
const logoText = document.querySelector('.logo-text');
const scroll = e => {
    if(window.scrollY > 20) {
        nav.style.backgroundColor = '#110d27';
        logoText.style.color = 'white';
    }
    else {
        nav.style.backgroundColor = 'transparent';
        logoText.style.color = 'black';
    }
};
window.addEventListener('scroll', scroll);
/*  =================================================================== */

// DRAGGING THE DESIGN IMAGE
const imgs = document.querySelectorAll('#imgDesign');

imgs.forEach(img => {
    let dragging = false;
    let offsetX, offsetY;

   const start =  e =>  {
        dragging = true;
        offsetX = e.clientX - img.getBoundingClientRect().left;
        offsetY = e.clientY - img.getBoundingClientRect().top;
    }

    const drag = e => {
        if (dragging) {
            img.style.left = e.clientX - offsetX + 'px';
            img.style.top = e.clientY - offsetY + 'px';
        }
    }

    const stop = e => {
        dragging = false;
    }
    
    img.addEventListener('mousedown', start);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stop);
});
