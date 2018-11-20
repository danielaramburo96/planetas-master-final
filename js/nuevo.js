$(document).ready(() => {

	const sels = {
		planetas: ".planetas__item",
		contenedores: ".contenedores__item"
	}

	const $DOM = {
		planetas: $(sels.planetas),
		contenedores: $(sels.contenedores)
	}

	interact(sels.contenedores).dropzone({
        accept: sels.planetas,
        overlap: .75,
        checker: (dragEvent, evt, dropped, dropzone, dropElement, draggable, draggableElement) => {
            const $itemPlaneta = $(draggableElement);
            const planeta = $itemPlaneta.attr("data-planeta");
            const $itemContenedor = $(dropElement);
            if ($itemContenedor.attr("data-planeta") === planeta && dropped) {
                const newClass = sels.contenedores + "--correcto";
                $itemContenedor.addClass(newClass.split(".")[1]);
                $itemPlaneta.fadeOut("fast");
                isCorrecto = true;
            } else {
                isCorrecto = false;
            }
            if (dropped && !isCorrecto) {
                alert("Incorrecto");
            }
            return dropped && isCorrecto;
        }
	});

	interact(sels.planetas).draggable({
		inertia: true,
		autoScroll: true,
		onmove: evt => {
			const target = evt.target,
				x = (parseFloat(target.getAttribute('data-x')) || 0) + evt.dx,
				y = (parseFloat(target.getAttribute('data-y')) || 0) + evt.dy;

			target.style.webkitTransform =
				target.style.transform =
				'translate(' + x + 'px, ' + y + 'px)';

			target.setAttribute('data-x', x);
			target.setAttribute('data-y', y);
		}
	});

});
