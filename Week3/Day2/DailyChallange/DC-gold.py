# Instructions :
# This challenge is about Biology that will put emphasis on your knowledge of classes, inheritance and polymorphism.

# Build a DNA object. DNA is composed of chromosomes which is itself composed of Genes.
# A Gene is a single value 0 or 1, it can mutate (flip).
# A Chromosome is a series of 10 Genes. It also can mutate, meaning a random number of genes can randomly 
#flip (1/2 chance to flip).
# A DNA is a series of 10 chromosomes, and it can also mutate the same way Chromosomes can mutate.

# Implement these classes as you see fit.

# Create a new class called Organism that accepts a DNA object and an environment parameter that sets the 
#probability for its DNA to mutate.

# Instantiate a number of Organism and let them mutate until one gets to a DNA which is only made of 1s. 
#Then stop and record the number of generations (iterations) it took.
# Write your results in you personal biology research notebook and tell us your conclusion :).

from random import choice, sample, randrange

class Gene:
    mut = [0, 1]
    def __init__(self):
        self.gene = choice(self.mut)

    def flip(self):
        if self.gene == 1:
            return
        self.gene = choice(self.mut)

    def __str__(self):
        return f'{self.gene}'


class Chromosome:

    def __init__(self):
        self.list_gen = []
        for one_gene in range(10):
            one_gene = Gene()
            self.list_gen.append(one_gene)
    
    def mutate(self):
        if self.list_gen == [1,1,1,1,1,1,1,1,1,1]:
            return
        choice = randrange(10)
        mutate_genes = sample(self.list_gen, choice)
        for gen in mutate_genes:
            gen.flip()


class DNA:

    def __init__(self, mut = False):
        self.list_chro = []
        for one_chro in range(10):
            one_chro = Chromosome()
            self.list_chro.append(one_chro)
        
        self.mut = mut

    def mutate(self):
        choice = randrange(10)
        mutate_chro_list = sample(self.list_chro, choice)
        for chro in mutate_chro_list:
            chro.mutate()

a = DNA()

class Organizm:
    def __init__(self, mutate):
        self.dna = DNA(mutate)

    def check_dna(self):
        string_gen = ''
        for chromosome in self.dna.list_chro:
            for gen in chromosome.list_gen:
                string_gen += gen.__str__()
        print(string_gen)
        if '0' in string_gen:
            return False
        else:
            return True

    def mutate(self):
        count = 0
        while self.check_dna() == False:
            self.check_dna()
            count +=1
            self.dna.mutate()
        else:
            print(count)


organizm = Organizm(False)

organizm.mutate()

