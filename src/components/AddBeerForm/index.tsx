import { FormEvent, useCallback, useState } from 'react';

// components
import ButtonPrimary from '@/components/Buttons/Primary';
import ButtonNoOutline from '@/components/Buttons/NoOutline';

// models
import { db } from '@/models/beer.model';

// assets
import MyBeerImage from '@/assets/images/my-beer.png';

// types
import type { Props } from './types';

function AddBeerForm({ closeModal }: Props) {
  const [isSaving, setIsSaving] = useState(false);

  const [name, setName] = useState<string>('');
  const [tagline, setTagline] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [ingredients, setIngredients] = useState<string>('');

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      if (!name || !tagline || !description || !ingredients) return;

      setIsSaving(true);

      await db.beers.add({
        name,
        tagline,
        description,
        ingredients,
        image_url: null,
      });

      closeModal();
      setIsSaving(false);
    },
    [name, tagline, closeModal, description, ingredients],
  );

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
        <ButtonNoOutline
          onClick={() => closeModal()}
          classNames='text-sonic-silver'
        >
          Cancel
        </ButtonNoOutline>
        <ButtonPrimary type='submit' classNames='ml-6 px-6' disabled={isSaving}>
          {isSaving ? (
            <>
              Saving <i className='fa-solid fa-circle-notch animate-spin'></i>
            </>
          ) : (
            'Save'
          )}
        </ButtonPrimary>
      </div>
    </form>
  );
}

export default AddBeerForm;
