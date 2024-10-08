
//MouseEvent --> will be triggered when input radio is clicked

//I will store the current category selected to show their specifications
export const getCategorySelected = (e: React.MouseEvent<HTMLInputElement>, setCategorySelected: (value: string) => void) => {
    const {value} = e.currentTarget;
    setCategorySelected(value);
}
