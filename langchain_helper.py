#import langchain.llms import OpenAI
# for now wiil change to lama later
#from dotenv import load_dotenv
from langchain.callbacks.manager import CallbackManager
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler
from langchain.llms import Ollama
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain

"""
This model is got from install ollama
And running 'ollama run llama2-uncensored
Its about 3gb and you need an okay gpu to run it
"""

def generate(name):
    llm = Ollama(
        model="llama2-uncensored"
        #callback_manager=CallbackManager([StreamingStdOutCallbackHandler()]
        )
    
    prompt_template_name = PromptTemplate(
        input_variables = ['animal_type','pet_color'],
        template = "I have a {animal_type} pet and I want a cool name for it, it is {pet_color} in color. Suggest me five cool names for my pet."
    )

    name_chain = LLMChain(llm=llm, prompt=prompt_template_name, output_key="pet_name")

    response = name_chain({'animal_type': animal_type, 'pet_color': pet_color})


    return response

if __name__ == "__main__":
    print(generate_pet_name("Dog", "Black"))
