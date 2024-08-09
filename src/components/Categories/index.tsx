import { useState } from "react";
import { FlatList } from "react-native";

import { categories } from "../../mocks/categories";
import { Text } from "../Text";

interface CategoriesProps {
    categories: CategoryInterface[];
    onSelectCategory: (categoryId: string) => Promise<void>;
}

import { Category, Icon } from "./styles";
import { CategoryInterface } from "../../types/Category";

export function Categories({ categories, onSelectCategory }: CategoriesProps) {
    const [selectedCategory, setSelectedCategory] = useState('');

    function handleSelectCategory(categoryId: string) {
        const category = selectedCategory === categoryId ? '' : categoryId;
        onSelectCategory(category);
        setSelectedCategory(category);
    }

    return (
        <>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categories}
                contentContainerStyle={{ paddingRight: 24 }}
                keyExtractor={category => category._id}
                renderItem={({ item: category }) => {
                    const isSelected = selectedCategory === category._id
                    return (
                        <Category onPress={() => handleSelectCategory(category._id)}>
                            <Icon>
                                <Text opacity={isSelected ? 1 : 0.5}>
                                    {category.category_icon}
                                </Text>
                            </Icon>
                            <Text size={14} weight="600" opacity={isSelected ? 1 : 0.5}>
                                {category.category_name}
                            </Text>
                        </Category>
                    )
                }}
            />
        </>
    )
}
