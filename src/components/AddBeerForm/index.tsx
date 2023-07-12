import { FormEvent, useState } from 'react';

// components
import ButtonPrimary from '@/components/Buttons/Primary';

// models
import BeerModel from '@/models/beer.model';

// assets
import MyBeerImage from '@/assets/images/my-beer.png';

// types
import type { Props } from './types';

function AddBeerForm({ closeModal }: Props) {
  const [name, setName] = useState<string>('');
  const [tagline, setTagline] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [ingredients, setIngredients] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name || !tagline || !description || !ingredients) return;

    BeerModel.add({
      name,
      tagline,
      description,
      ingredients,
    });

    closeModal();
  };

  return (
    <form
      action='#'
      className='flex flex-col items-stretch justify-start gap-5 w-96'
      onSubmit={handleSubmit}
    >
      <h1 className='text-2xl font-bold'>Add a new beer</h1>

      <img
        src={MyBeerImage}
        alt='Custom beer'
        className='object-contain w-24 h-auto border rounded'
      />

      <input
        value={name}
        placeholder='Beer name *'
        onChange={e => setName(e.target.value)}
        className='p-3 border rounded outline-cerulean-blue'
        required
      />

      <input
        value={tagline}
        placeholder='Tagline *'
        onChange={e => setTagline(e.target.value)}
        className='p-3 border rounded outline-cerulean-blue'
        required
      />

      <input
        value={ingredients}
        placeholder='Ingredients *'
        onChange={e => setIngredients(e.target.value)}
        className='p-3 border rounded outline-cerulean-blue'
        required
      />

      <textarea
        rows={3}
        value={description}
        placeholder='Description *'
        onChange={e => setDescription(e.target.value)}
        className='p-3 border rounded resize-y outline-cerulean-blue'
        required
      ></textarea>

      <div className='text-right'>
        <ButtonPrimary onClick={() => closeModal()}>Cancel</ButtonPrimary>
        <ButtonPrimary type='submit' classNames='ml-3'>
          Save
        </ButtonPrimary>
      </div>
    </form>
  );
}

export default AddBeerForm;
