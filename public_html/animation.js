//line drawing
            let JHAnimation = anime({
                targets: '.animation1',
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                duration: 8000,
                direction: 'alternate',
                loop: true
            }); 
            
            //path of svg path
            var path = anime.path('path');
            
            //dot following path
            anime({
                targets: '.el',
                translateX: path('x'),
                translateY: path('y'),
                rotate: path('angle'),
                easing: 'linear',
                duration: 12000,
                loop: true
            });


