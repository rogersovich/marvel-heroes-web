import React from "react";
import { Character } from "../../store/character/character.types";
import { Box, Image } from "@chakra-ui/react";
import { Thumbnail } from "../../store/character/character.types";

interface Props {
  characters: Character[]
}

const HomeList: React.FC<Props> = ({ characters }) => {
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

  return (
    <>
      <div className="tw-px-4 tw-py-3">
        <div className="tw-text-2xl bold tw-text-center">
          List Heroes fo Character
        </div>
        <br />
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
                    <div className="tw-text-[16px] bold tw-text-gray-500">
                      Comics
                    </div>
                    <div className="tw-text-gray-800 bold">
                      {character.comicsCount}
                    </div>
                  </div>
                  <div className="tw-col-span-4">
                    <div className="tw-text-[16px] bold tw-text-gray-500">
                      Series
                    </div>
                    <div className="tw-text-gray-800 bold">
                      {character.seriesCount}
                    </div>
                  </div>
                  <div className="tw-col-span-4">
                    <div className="tw-text-[16px] bold tw-text-gray-500">
                      Stories
                    </div>
                    <div className="tw-text-gray-800 bold">
                      {character.storiesCount}
                    </div>
                  </div>
                </div>
              </Box>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeList;

