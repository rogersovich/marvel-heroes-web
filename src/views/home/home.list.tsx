import React, {useEffect} from "react";
import { Character } from "../../store/character/character.types";
import { Box, Image } from "@chakra-ui/react";
import { Thumbnail } from "../../store/character/character.types";
import Pagination from "../../utils/Pagination";
import CsInput from "../../components/cs.input";
// form
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { FormData } from "./home.types";
import { homeSchema } from "./home.schema";

interface Props {
  characters: Character[]
  page: number,
  count: number,
  limit: number,
  onChangePagination: (page: number) => void,
  handleOnSubmit: (data: FormData) => void,
  searchVal: string
}

const HomeList: React.FC<Props> = ({ characters, page, count, limit, onChangePagination, handleOnSubmit, searchVal }) => {
  const formatImage = (image: Thumbnail) => {
    const thumbnail = `${image.path}.${image.extension}`
    return thumbnail
  }

  const trimWord = (word: string) => {
    if (word !== '') {
      return word.length > 30 ? word.substring(0, 30) + "..." : word;
    } else {
      return "-"
    }
  }

  const initialValues = {
    search: "",
  }

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: initialValues,
    resolver: yupResolver(homeSchema),
  })

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const value = watch("search");
      homeSchema.validate({ q: value })
        .then(() => handleSubmit)
        .catch(() => { })
    }
  }

  const onSubmit = (data: FormData) => {
    handleOnSubmit(data)
  }

  useEffect(() => {
    if(searchVal){
      setValue('search', searchVal)
    }
  }, [searchVal, setValue])
  


  return (
    <>
      <div className="tw-px-4 tw-py-3">
        <div className="tw-text-3xl bold tw-text-center">
          List Heroes fo Character
        </div>
        <div className="tw-my-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <CsInput name="search" placeholder="Search is here..." label="Search" errors={errors.search} register={register} onKeyUp={handleKeyPress} />
          </form>
        </div>
        <div className="grid-12 tw-gap-4">
          {characters.map((character) => (
            <div className="md:tw-col-span-4 xl:tw-col-span-3" key={character.id}>
              <Box bgColor={'#fff'} shadow={'md'} borderRadius={'md'} px={4} py={4}>
                <div className="fcc">
                  <Image src={formatImage(character.thumbnail)} objectFit={'cover'} alt={character.name} boxSize={'300px'} borderRadius={'md'} border={'2px'} borderColor={'#e23636'}></Image>
                </div>
                <div className="tw-mt-2 tw-mb-3">
                  <div className="bold tw-text-[20px] tw-text-[#e23636]">
                    {character.name}
                  </div>
                  <div className="tw-text-gray-700">
                    {trimWord(character.description)}
                  </div>
                </div>
                <div className="grid-12 tw-gap-3">
                  <div className="tw-col-span-4">
                    <div className="tw-text-[16px] bold tw-text-[#e23636]">
                      Comics
                    </div>
                    <div className="tw-text-gray-700">
                      {character.comicsCount}
                    </div>
                  </div>
                  <div className="tw-col-span-4">
                    <div className="tw-text-[16px] bold tw-text-[#e23636]">
                      Series
                    </div>
                    <div className="tw-text-gray-700">
                      {character.seriesCount}
                    </div>
                  </div>
                  <div className="tw-col-span-4">
                    <div className="tw-text-[16px] bold tw-text-[#e23636]">
                      Stories
                    </div>
                    <div className="tw-text-gray-700">
                      {character.storiesCount}
                    </div>
                  </div>
                </div>
              </Box>
            </div>
          ))}
        </div>
        <br />
        <div className="tw-text-center">
          <Pagination
            currentPage={page}
            totalCount={count}
            pageSize={limit}
            onPageChange={(page: number) => onChangePagination(page)}
          />
        </div>
      </div>
    </>
  );
}

export default HomeList;

