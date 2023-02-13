import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm(){

  const { 
      register,
     handleSubmit,
     formState: {isSubmitting}
    } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  //funções de acoes feitas pelo usuário - handle
  function handleSearchTransactions(data: SearchFormInputs) {
    
  }

  return(
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input type='text' placeholder="Busque por transações"
      {...register('query')}
      
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20}/>
        Buscar
      </button>
    </SearchFormContainer>

  
  )
}