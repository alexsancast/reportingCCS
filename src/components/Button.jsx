import * as React from 'react';
import { Button as BaseButton, buttonClasses } from '@mui/base/Button';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import dayjs from 'dayjs';

export default function Buttons({ report, startDate, endDate, company, onClose }) {

  const fetchData = async () => {

    try {
      let apiUrl = '';

      // Construye la URL de la API basada en el tipo de reporte seleccionado
      switch (report) {
        case 0:
          apiUrl = `http://172.20.3.176:8000/general/${dayjs(startDate).format('YYYY-MM-DD')}/${dayjs(endDate).format('YYYY-MM-DD')}`;
          break;
        case 1:
          apiUrl = `http://172.20.3.176:8000/detailed/${company}/${dayjs(startDate).format('YYYY-MM-DD')}/${dayjs(endDate).format('YYYY-MM-DD')}`;
          break;
        case 2:
          apiUrl = `http://172.20.3.176:8000/individual/${company}/${dayjs(startDate).format('YYYY-MM-DD')}/${dayjs(endDate).format('YYYY-MM-DD')}`;
          break;
        default:
          break;
      }

      // Realiza la solicitud a la API usando fetch
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('No se pudo completar la solicitud');
      }

      // Obtiene el contenido del archivo PDF como un Blob
      const pdfBlob = await response.blob();

      // Crea un objeto URL para el Blob
      const pdfUrl = URL.createObjectURL(pdfBlob);

      // Abre el PDF en una nueva ventana o pestaña
      window.open(pdfUrl);

    } catch (error) {
      console.error('Error al consultar la API:', error);
      // Aquí puedes manejar errores de la solicitud a la API
    }
  };

  const handleButtonClick = () => {
    console.log('Fecha de inicio seleccionada:', dayjs(startDate).format('YYYY-MM-DD'));
    console.log('Fecha de fin seleccionada:', dayjs(endDate).format('YYYY-MM-DD'));
    console.log('Nombre de la compañía:', company);
    console.log('Report:', report);
    onClose();



  };
  return (
    <Stack spacing={4} direction="row">
      <Button onClick={handleButtonClick}>
        Generar Reporte
      </Button>
    </Stack>
  );
}

const blue = {
  200: '#99CCFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0066CC',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Button = styled(BaseButton)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: #09af1f;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid: #09af1f;
  box-shadow: 0 2px 1px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(45, 45, 60, 0.2)'
    }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonClasses.active} {
    background-color: ${blue[700]};
    box-shadow: none;
    transform: scale(0.99);
  }

  &.${buttonClasses.focusVisible} {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }

  &.${buttonClasses.disabled} {
    background-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[700]};
    border: 0;
    cursor: default;
    box-shadow: none;
    transform: scale(1);
  }
  `,
);