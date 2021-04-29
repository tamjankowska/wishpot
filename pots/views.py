from django.shortcuts import render, redirect
from django.contrib.auth import login
from django.contrib.auth.forms import UserCreationForm
from django.views.generic import TemplateView

def redirect_view(request):
    response = redirect('login/')
    return response
   
class SignupView(TemplateView):
    template_name = 'pots/signup.html'

    def get(self, request, *args, **kwargs):
        form = UserCreationForm()
        return render(request, self.template_name, {'form': form})


    def post(self, request, *args, **kwargs):
        form = UserCreationForm(request.POST)

        if form.is_valid():
            user = form.save()
            login(request, user)
            print("fuck you, you fucking fuck")

            return redirect('dashboard')

        return render(request, self.template_name, {'form': form})

class DashboardView(TemplateView):
    template_name = 'pots/dashboard.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name)

class NewListView(TemplateView):
    template_name = 'pots/new_list.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name)

class ListsView(TemplateView):
    template_name = 'pots/lists.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name)

class SpendsView(TemplateView):
    template_name = 'pots/spends.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name)