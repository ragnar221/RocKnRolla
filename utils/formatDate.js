export const formatDate = date => {
  const fecha = date.split('T')[0];
  const fechaVisible = fecha.split('-').reverse().join('/');
  const hora = date.split('T')[1].split('.')[0];
  const horaVisible = hora.split(':').slice(0, 2).join(':');
    return `${fechaVisible} ${horaVisible}`;
};