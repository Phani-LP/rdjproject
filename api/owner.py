# from django.views.generic import CreateView, UpdateView, DeleteView, ListView, DetailView
from django.views.generic import UpdateView
from django.contrib.auth.mixins import LoginRequiredMixin

class OwnerUpdateView(LoginRequiredMixin, UpdateView):
    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(name=self.request.user.username)