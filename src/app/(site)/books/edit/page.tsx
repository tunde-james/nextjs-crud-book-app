'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

function EditPage() {
  const searchParams = useSearchParams();
  const bookId = searchParams.get('id');
  console.log(bookId);

  return <div>EditPage</div>;
}

export default EditPage;