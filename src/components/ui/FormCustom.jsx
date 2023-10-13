import React from 'react';
import { Formik, Field, Form } from 'formik';

const PokemonForm = ({ onClose}) => (
  <div>
    <h1>Crear un Pokémon</h1>
    <Formik
      initialValues={{
        nombre: '',
        tipo: '',
        habilidades: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
      <ModalBody>
        <label htmlFor="nombre">Nombre</label>
        <Field id="nombre" name="nombre" placeholder="Pikachu" />

        <label htmlFor="tipo">Tipo</label>
        <Field id="tipo" name="tipo" placeholder="Eléctrico" />

        <label htmlFor="habilidades">Habilidades</label>
        <Field id="habilidades" name="habilidades" placeholder="Impactrueno, Rayo" />
        </ModalBody>
        <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
                Cancel
            </Button>
            <Button variant='ghost' type="submit">Create</Button>
        </ModalFooter>
        
      </Form>
    </Formik>
  </div>
);

export default PokemonForm;