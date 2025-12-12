// Sistema de Afiliados - Almacena en localStorage (simulado)
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar lista de afiliados si no existe
    if (!localStorage.getItem('afiliados')) {
        localStorage.setItem('afiliados', JSON.stringify([
            { id: 'A001', nombre: 'Ana García', email: 'ana@ejemplo.com', fecha: '2025-01-15', patrocinador: '', nivel: 1 },
            { id: 'A002', nombre: 'Carlos López', email: 'carlos@ejemplo.com', fecha: '2025-01-20', patrocinador: 'A001', nivel: 2 },
            { id: 'A003', nombre: 'María Rodríguez', email: 'maria@ejemplo.com', fecha: '2025-01-25', patrocinador: 'A001', nivel: 2 }
        ]));
    }
    
    // Manejar formulario de afiliación
    const formAfiliacion = document.getElementById('form-afiliacion');
    if (formAfiliacion) {
        formAfiliacion.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Generar ID único
            const nuevoId = 'A' + String(Math.floor(1000 + Math.random() * 9000));
            
            // Obtener datos del formulario
            const nuevoAfiliado = {
                id: nuevoId,
                nombre: document.getElementById('nombre').value,
                email: document.getElementById('email').value,
                telefono: document.getElementById('telefono').value || 'No proporcionado',
                patrocinador: document.getElementById('patrocinador').value || 'Directo',
                fecha: new Date().toISOString().split('T')[0],
                nivel: 1
            };
            
            // Guardar en localStorage
            const afiliados = JSON.parse(localStorage.getItem('afiliados'));
            afiliados.push(nuevoAfiliado);
            localStorage.setItem('afiliados', JSON.stringify(afiliados));
            
            // Mostrar confirmación
            alert(`✅ ¡Afiliación exitosa!\nTu ID de afiliado es: ${nuevoId}\nAhora puedes acceder al panel de control.`);
            
            // Redirigir al panel
            window.location.href = 'panel-afiliados.html?id=' + nuevoId;
        });
    }
});
