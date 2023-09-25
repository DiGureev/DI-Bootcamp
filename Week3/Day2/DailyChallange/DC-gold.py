# Instructions :
# This challenge is about Biology that will put emphasis on your knowledge of classes, inheritance and polymorphism.

# Build a DNA object. DNA is composed of chromosomes which is itself composed of Genes.
# A Gene is a single value 0 or 1, it can mutate (flip).
# A Chromosome is a series of 10 Genes. It also can mutate, meaning a random number of genes can randomly 
#flip (1/2 chance to flip).
# A DNA is a series of 10 chromosomes, and it can also mutate the same way Chromosomes can mutate.

from random import choice, sample, randrange

class Gene:
    mut = [0, 1]

    def __init__(self):
        self.gene = choice(self.mut)

    def flip(self):
        self.gene = choice(self.mut)
        return self.gene


class Chromosome:

    def __init__(self):
        self.list_gen = []
        self.genes = []
        for index, one_gene in enumerate(range(10)):
            one_gene = Gene()
            self.list_gen.append((one_gene, index))
            self.genes.append(one_gene.gene)
    
    def mutate(self):
        choice = randrange(10)
        mutate_genes = sample(self.list_gen, choice)
        for gen in mutate_genes:
            mutate_gen = gen[0].flip()
            self.list_gen[gen[1]] = (mutate_gen, gen[1])
            self.genes[gen[1]] = mutate_gen
        return self.genes

class DNA:

    def __init__(self, mut = False):
        self.list_chro = []
        self.mutate_list = []
        for index, one_chro in enumerate(range(10)):
                one_chro = Chromosome()
                self.list_chro.append((one_chro, index))
                self.mutate_list.append(one_chro.genes)
        
        self.mut = mut
        
        if mut == True:
            self.mutate()

    def dna_list(self):
        return self.mutate_list

    def mutate(self):
        choice = randrange(10)
        mutate_chro = sample(self.list_chro, choice)
        for chro in mutate_chro:
            mutate_chro = chro[0].mutate()
            self.list_chro[chro[1]] = (mutate_chro, chro[0])
            self.mutate_list[chro[1]] = mutate_chro

a = DNA()

# print(a.dna_list())


class Organizm:
    def __init__(self, mutate):
        self.dna = DNA(mutate).dna_list()


def check_dna():
    mutation_list = [True, False]
    organizm = Organizm(choice(mutation_list))
    if str(0) in str(organizm.dna):
        return False
    else: 
        return True

def ideal_dna():
    count = 0
    while check_dna() == False:
        check_dna()
        count +=1
    else:
        print(count)


ideal_dna()

    






# Implement these classes as you see fit.

# Create a new class called Organism that accepts a DNA object and an environment parameter that sets the 
#probability for its DNA to mutate.

# Instantiate a number of Organism and let them mutate until one gets to a DNA which is only made of 1s. 
#Then stop and record the number of generations (iterations) it took.
# Write your results in you personal biology research notebook and tell us your conclusion :).

