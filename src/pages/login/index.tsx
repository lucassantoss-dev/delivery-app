import { TouchableOpacity } from 'react-native';
import { Text } from '../../components/Text';
import {
    LoginContainer,
    Icon,
    IconImage,
    ModalForm,
    Input,
    ContainerView,
    ViewContainerLogo,
    ViewContainerForm
} from './styles';
import { Button } from '../../components/Button';
import * as Animatable from 'react-native-animatable';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../../routes';

export default function Login() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <ContainerView>
            <ViewContainerLogo>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/images/logo1.png')}
                    style={{ width: '100%', height: '70%', alignItems: 'flex-start', justifyContent: 'flex-start' }}
                    resizeMode="contain" />
                <Animatable.View animation="fadeInLeft" style={{ marginTop: '8%', marginBottom: '3%', paddingStart: '5%' }}>
                    <Text size={28} weight="600" color="#fff">Bem-vindo(a)</Text>
                </Animatable.View>
            </ViewContainerLogo>
            <ViewContainerForm>
                <Animatable.View delay={200} animation="fadeInUp">
                    <LoginContainer>
                        <Icon>
                            <TouchableOpacity>
                                <IconImage source={require('../../assets/images/phone.png')} />
                            </TouchableOpacity>
                        </Icon>
                        <Icon>
                            <TouchableOpacity>
                                <IconImage source={require('../../assets/images/google.png')} />
                            </TouchableOpacity>
                        </Icon>
                        <Icon>
                            <TouchableOpacity>
                                <IconImage source={require('../../assets/images/facebook.png')} />
                            </TouchableOpacity>
                        </Icon>
                    </LoginContainer >
                </Animatable.View>
                <Animatable.View delay={200} animation="fadeInUp" style={{ alignItems: 'center', flex: 1 }}>
                    <Text size={14} weight="600">Login com</Text>
                    <Text size={14}>ou</Text>
                    <ModalForm>
                        <Input
                            placeholder="E-mail"
                            placeholderTextColor="#666"
                            keyboardType="number-pad"
                        />
                        <Input
                            placeholder="Senha"
                            placeholderTextColor="#666"
                            keyboardType="number-pad"
                        />

                        <Button onPress={() => navigation.navigate("Main")}>
                            Entrar
                        </Button>
                        <TouchableOpacity style={{ marginTop: 14, alignSelf: 'center' }}>
                            <Text size={14} color="#a1a1a1">Não possui uma conta? Cadastre-se</Text>
                        </TouchableOpacity>
                    </ModalForm>
                </Animatable.View>
            </ViewContainerForm>
        </ContainerView>
    )
}
